import styles from './Shortening.module.css'
import { useState } from 'react';

const Shortening = () => {
  // API Key for the TinyURL API
  const API_KEY = "MSrganNsFvoTFs4DTdYxDzWc4yOXNiVoGIQeYbd8Ho8uQWbg7LKWTmyFSu0J"

  // Define local states for the component.
  // State to store the URL entered by the user.
  const [inputValue, setInputValue] = useState('');

  // State to store the shortened URL.
  const [tinyUrl, setTinyUrl] = useState('');

  // State to store a list of all shortened links.
  const [links, setLinks] = useState([]);

  // State to show error messages to the user.
  const [error, setError] = useState(null);

  // State to store the text for the copy buttons.
  const [buttonTexts, setButtonTexts] = useState([]);

  // State to indicate the index of the copied link.
  const [copiedIndex, setCopiedIndex] = useState(null);


  // Function to update `inputValue` state with the URL entered by the user.
  const handleInputChange  = (e) => {
    setInputValue(e.target.value)
    setError(null);
  }

  // Function to validate the URL and send a request to the TinyURL API.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if a URL has been entered.
    if (inputValue) {
      try {
        // Send a request to the TinyURL API.
        const response = await fetch(
          `https://tinyurl.com/api-create.php?url=${inputValue}&api_key=${API_KEY}`
        );
        
        // If the request is successful, process the response.
        if (response.ok) {
          const data = await response.text();
          const newLink = {
            originalUrl: inputValue,
            tinyUrl: data,
          };

          // Update the state with the new shortened URL and add it to the list of links.
          setLinks([...links, newLink]); // Add the new link to the list
          setTinyUrl(data);
          setButtonTexts((prevButtonTexts) => [...prevButtonTexts, "Copy"]);
          setInputValue('');
        } 

      } catch (error) {
        console.error(error);
      }
    } else {
      // Show an error message if no URL was entered.
      setError("Please add a link");
    }
  };

  // Function to copy the shortened URL to the clipboard and update the button text.
  const handleCopy = (url, index) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        const newButtonTexts = [...buttonTexts];
        newButtonTexts[index] = "Copied!";
        setButtonTexts(newButtonTexts);

        // If there was a previously copied button, restore its state.
        if (copiedIndex !== null && copiedIndex !== index) {
          newButtonTexts[copiedIndex] = "Copy";
          setButtonTexts(newButtonTexts);
        }

        // Update the state of the copied link index.
        setCopiedIndex(index);
      })
      .catch((error) => {
        console.error("Error copying the link:", error);
      });
  };

  return (
    <div className={styles.ShorteningMainContainer}>

      {/* Input form */}
      <form className={styles.InputAndButtonContainer}>
        <div className={styles.InputContainer}>
          <input
            value={inputValue}
            onChange={handleInputChange}
            type="text"
            placeholder="Shorten a link here..."
            style={{
              border: error ? "3px solid hsl(0, 87%, 67%)" : "none",
              color: error ? "hsl(0, 87%, 67%)" : "hsl(255, 11%, 22%)",
            }}
          />

          <p
            className={styles.InputError}
            style={{ display: error ? "block" : "none" }}
          >
            {error}
          </p>
        </div>

        <div className={styles.ButtonContainer}>
          <button onClick={handleSubmit}>Shorten It!</button>
        </div>
      </form>

      {/* Container for all links */}
      <div className={styles.AllLinksContainer}>
        {/* Map over the list of links and display each link in a container */}
        {links.map((link, index) => (
          <div className={styles.LinkMainContainer}>
            {/* Container for the original link */}
            <div className={styles.OriginalLinkContainer}>
              <p>{link.originalUrl}</p>
            </div>

            {/* Container for the shortened link and copy button */}
            <div className={styles.LinkShortenAndButtonContainer}>
              {/* Container for the shortened link */}
              <div className={styles.LinkShortedContainer}>
                <a href={link.originalUrl} target="_blank">
                  {link.tinyUrl}
                </a>
              </div>

              {/* Container for the copy button */}
              <div className={styles.LinksCopyButtonContainer}>
                <button
                  onClick={() => handleCopy(link.tinyUrl, index)}
                  style={{
                    backgroundColor:
                      buttonTexts[index] === "Copied!"
                        ? "hsl(257, 27%, 26%)"
                        : "hsl(180, 66%, 49%)",
                  }}
                >
                  {buttonTexts[index]}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shortening;
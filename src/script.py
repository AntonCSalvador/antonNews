from bs4 import BeautifulSoup
import requests

# Send an HTTP GET request to the URL
page_to_scrape = requests.get("https://quotes.toscrape.com/")

# Parse the HTML content of the page using BeautifulSoup
soup = BeautifulSoup(page_to_scrape.content, "html.parser")

# Find the desired <h2> element by searching for the specific class name
# h2_element = soup.find("h2", attrs={"class":"be ew ajc zf ajd ul aje zh ajf uq lb ur us uu lf uv uw uy lj uz va vc to tq tr vf tt tv bj"})

span_element = soup.find("span", attrs={"class":"text"})

# Check if the <h2> element was found
if span_element is not None:
    # Extract the text content of the <h2> element
    span = span_element.text
    print(span)
else:
    print("span element not found.")

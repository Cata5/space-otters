
async function loadTextFile(filePath: string) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error('Failed to fetch the text file');
      }
      return await response.text();
    } catch (error) {
      console.error(error);
      // Handle error loading the text file
      return null;
    }
  }
  
  export default loadTextFile;
  
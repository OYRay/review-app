// export const analyzeVideo = async (videoFile) => {
//     // Replace with the actual API URL and parameters required
//     const apiUrl = "https://your-video-analysis-api-url.com";
  
//     const formData = new FormData();
//     formData.append("video", videoFile);
  
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       body: formData,
//     });
  
//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`Error in video analysis: ${errorText}`);
//     }
  
//     const data = await response.json();
  
//     // Assuming the API returns a JSON object containing a `score` field
//     return data.score;
//   };
  
export const analyzeVideo = async (videoFile) => {
    const apiUrl = "http://localhost:8000/analyze-video";
  
    const formData = new FormData();
    formData.append("file", videoFile);
  
    const response = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error in video analysis: ${errorText}`);
    }
  
    const data = await response.json();
  
    // Assuming the API returns a JSON object containing a `score` field
    return data.score;
  };
  
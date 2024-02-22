export async function fetchSongData(requestData) {
  try {
    const response = await fetch("/api/songsSearch.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    // Muestra la respuesta en la consola
    return data;
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
    throw error;
  }
}

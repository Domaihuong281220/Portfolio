const playAudio = (audioUrl) => {
    try {
        new Audio(audioUrl).play();
    } catch (error) {
        console.error("Error playing audio:", error);
    }
};

export default playAudio;
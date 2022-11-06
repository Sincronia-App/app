export const getRoom = async (roomName = '1') => {
    console.log("endpoint", process.env.REACT_APP_ENDPOINT)
    const response = await fetch(`http://localhost:3000/api/v1/rooms/${roomName}`);
    const data = await response.json();
    return data;
}
export const getRoom = async (roomName = '1') => {
    console.log("endpoint", process.env.REACT_APP_ENDPOINT)
    console.log("room URL", `${process.env.REACT_APP_ENDPOINT}api/v1/rooms/${roomName}`)
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}api/v1/rooms/${roomName}`);
    const data = await response.json().catch((error) => {
        console.log("error", error)
        });
    return data;
}
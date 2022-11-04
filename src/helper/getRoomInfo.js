export const getRoomInfo = async (roomName = '') => {
    const response = await fetch(`http://localhost:3000/api/v1/room/${roomName}`);
    const data = await response.json();
    return data;
}
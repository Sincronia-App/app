export const getRoomInfo = async (roomName = '') => {
    const response = await fetch(`https://api-sincronia.codigohabil.com/api/v1/room`);
    const data = await response.json();
    return {};
}
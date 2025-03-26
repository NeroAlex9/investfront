export const getBonds = async () => {
    try {
        const response = await fetch('http://localhost:3000/bonds');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при получении облигаций:", error);
    }
};
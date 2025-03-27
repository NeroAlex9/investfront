export const getCoupons = async (bondsId:string) => {
    try {
            const response = await fetch(`http://localhost:3000/coupons/${bondsId}`);
            const data = await response.json();
            return data;
    } catch (error) {
        console.error("Ошибка при получении облигаций:", error);
    }
};
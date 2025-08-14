export const formatCount = (value) => {
        return value >= 1000 
                ? `${(value / 1000).toFixed(1)} k` 
                : value;
};

export const formatDateTime = (value) => {

        const date = new Date(value);

        const day = String(date.getDate()).padStart(2,'0');
        const month = String(date.getMonth() + 1).padStart(2,'0');
        const year = date.getFullYear();

        const hour = String(date.getHours()).padStart(2,'0');
        const minutes = String(date.getMinutes()).padStart(2,'0');
        const seconds = String(date.getSeconds()).padStart(2,'0');

        const time = `${day}/${month}/${year} - ${hour}:${minutes}:${seconds}`;

        return time;
};

export const formatDate = (value) => {

        const date = new Date(value);

        const day = String(date.getDate()).padStart(2,'0');
        const month = String(date.getMonth() + 1).padStart(2,'0');
        const year = date.getFullYear();

        const time = `${day}/${month}/${year}`;

        return time;
};
export function GetProducts() {
    fetch("https://192.168.17.120:4001/api/products")
        .then(res => res.json())
        .then(data => {
            return data;
           })
}

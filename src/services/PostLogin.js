export default function PostLogin() {

    fetch(finalFormEndpoint, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }

            return response.json();
        })
        .then(() => {
            setMessage("We'll be in touch soon.");
            setStatus("success");
        })
        .catch((err) => {
            setMessage(err.toString());
            setStatus("error");
        });

}
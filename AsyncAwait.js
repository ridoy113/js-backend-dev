async function getData() {
    // const res=[]
    const res = await Promise;
    console.log(res);
}

getData();


fetch("")
    .then(res => res.json())
    .then(data => console.log(data));

async function getUser() {
    const res = await fetch("");
    const user = await res.json();

    const res2 = await fetch(`https://www.example.com/${user.id}`);
    const products =res2.json();

    console.log(products);
}

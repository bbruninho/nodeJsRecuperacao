

app.get("/Milhas/", (req, res) => {
    // http://localhost:3000/Milhas/?num1=0&num2=3
    const num1 = req.query.num1

    const resultado = Number(num1) * 1.60934;

    res.json({ message: resultado })
})

app.get("/Tabuada/", (req, res, res1, res2 , res3, res4, res5, res6, res7, res8, res9) => {
    // http://localhost:3000/Tabuada/?num1=0&num2=3
    const num1 = req.query.num1

    const resultado = Number(num1) * 1;
    const resultado1 = Number(num1) * 2;
    const resultado2 = Number(num1) * 3;
    const resultado3 = Number(num1) * 4;
    const resultado4 = Number(num1) * 5;
    const resultado5 = Number(num1) * 6;
    const resultado6 = Number(num1) * 7;
    const resultado7 = Number(num1) * 8;
    const resultado8 = Number(num1) * 9;
    const resultado9 = Number(num1) * 10;

    res.json({ message: resultado })
    res1.json({ message: resultado1 })
    res2.json({ message: resultado2 })
    res3.json({ message: resultado3 })
    res4.json({ message: resultado4 })
    res5.json({ message: resultado5 })
    res6.json({ message: resultado6})
    res7.json({ message: resultado7 })
    res8.json({ message: resultado8 })
    res9.json({ message: resultado9 })


})

app.get("/Maior/", (req, res) => {
    // http://localhost:3000/Maior/?num1=0&num2=3

    const num1 = req.query.num1
    const num2 = req.query.num2

    if(num1>num2) {
        num3 = num1
    } else {
        num3 = num2
    }
    const resultado = num3

    res.json({ message: resultado })

})

app.get("/Carro/", (req, res) => {
    // http://localhost:3000/Carro/?num1=0&num2=3

    const num1 = req.query.num1

    const resultado = (num1 + (num1 % 28) ) + (num1 % 45)

    res.json({ message: resultado })

})

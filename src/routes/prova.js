
const express = require('express');
const calculations = require('./controllers');

const router = express.Router();

router.get("/Milhas/", (req, res) => {
    const { num1,} = req.query;
    const resultado = calculations.milhas(num1);
    res.json({ message: resultado });
});

router.get("/Tabuada/", (req, res, res1, res2 , res3, res4, res5, res6, res7, res8, res9) => {
    const { num1} = req.query;
    const resultado = calculations.tabuada(num1);
    const resultado1 = calculations.tabuada(num1);
    const resultado2 = calculations.tabuada(num1);
    const resultado3 = calculations.tabuada(num1);
    const resultado4 = calculations.tabuada(num1);
    const resultado5 = calculations.tabuada(num1);
    const resultado6 = calculations.tabuada(num1);
    const resultado7 = calculations.tabuada(num1);
    const resultado8 = calculations.tabuada(num1);
    const resultado9 = calculations.tabuada(num1);
    res.json({ message: resultado });
    res1.json({ message: resultado1 });
    res2.json({ message: resultado2 });
    res3.json({ message: resultado3 });
    res4.json({ message: resultado4 });
    res5.json({ message: resultado5 });
    res6.json({ message: resultado6 });
    res7.json({ message: resultado7 });
    res8.json({ message: resultado8 });
    res9.json({ message: resultado9 });
});

router.get("/Maior/", (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = calculations.maior(num1, num2);
    res.json({ message: resultado });
});

router.get("/Carro/", (req, res) => {
    const { num1} = req.query;
    const resultado = calculations.carro(num1);
    res.json({ message: resultado });
});



module.exports = router;
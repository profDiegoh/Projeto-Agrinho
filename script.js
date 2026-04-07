function calcularImpacto() {
    const area = document.getElementById('area').value;
    const resultado = document.getElementById('resultado');

    if (area > 0) {
        // Exemplo hipotético: 500 litros economizados por hectare
        const economia = area * 500;
        resultado.innerText = `Ao usar sensores de umidade, sua fazenda economizaria aproximadamente ${economia} litros de água por dia!`;
        resultado.style.color = "#2d5a27";
        resultado.style.fontWeight = "bold";
    } else {
        resultado.innerText = "Por favor, insira um valor válido para a área.";
        resultado.style.color = "red";
    }
}

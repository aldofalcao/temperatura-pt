const botao = document.querySelector('[data-js="btn"]')
const temperatura = document.querySelector('[data-js="temp"]')
const mensagem = document.querySelector('[data-js="msg"]')
const celsius = document.querySelector('[data-js="celsius"]')
const fahrenheit = document.querySelector('[data-js="fahrenheit"]')
const kelvin = document.querySelector('[data-js="kelvin"]')

const celsiusParaFahrenheit = () => (parseFloat(temperatura.value) * 9 / 5 + 32).toFixed(1)

const celsiusParaKelvin = () => (parseFloat(temperatura.value) + 273.15).toFixed(1)

const fahrenheitParaCelsius = () => ((parseFloat(temperatura.value) - 32) * 5 / 9).toFixed(1)

const fahrenheitParaKelvin = () => ((parseFloat(temperatura.value) - 32) * 5 / 9 + 273.15).toFixed(1)

const kelvinParacelsius = () => (parseFloat(temperatura.value) - 273.15).toFixed(1)

const kelvinParaFahrenheit = () => ((parseFloat(temperatura.value) - 273.15) * 9 / 5 + 32).toFixed(1)

const msgCelsius = () => mensagem.innerHTML = `
    <table>
        <tr>
            <td rowspan="2">${temperatura.value} °C = </td>
            <td>&nbsp; ${celsiusParaFahrenheit()} °F</td>
        </tr>
        <tr>
            <td>&nbsp; ${celsiusParaKelvin()} K</td>
        </tr>
    </table>`

const msgFahrenheit = () => mensagem.innerHTML = `
    <table>
        <tr>
            <td rowspan="2">${temperatura.value} °F = </td>
            <td>&nbsp; ${fahrenheitParaCelsius()} °C</td>
        </tr>
        <tr>
            <td>&nbsp; ${fahrenheitParaKelvin()} K</td>
        </tr>
    </table>`

const msgKelvin = () => mensagem.innerHTML = `
    <table>
        <tr>
            <td rowspan="2">${temperatura.value} K = </td>
            <td>&nbsp; ${kelvinParacelsius()} °C</td>
        </tr>
        <tr>
            <td>&nbsp; ${kelvinParaFahrenheit()} °F</td>
        </tr>
    </table>`

const conversao = () => {
    const radio = document.querySelector('input[name="temperatura"]:checked')

    if (temperatura.value === '') {
        mensagem.innerHTML = 'Informe a temperatura'
    } else if (radio === null) {
        mensagem.innerHTML = 'Selecione uma opção'
    } else {
        if (radio.value === 'celsius') {
            msgCelsius()
        } else if (radio.value === 'fahrenheit') {
            msgFahrenheit()
        } else {
            msgKelvin()
        }
        temperatura.value = ''
        botao.blur()
    }

}

botao.addEventListener('click', () => conversao())
temperatura.addEventListener('click', () => mensagem.innerHTML = '')
celsius.addEventListener('click', () => mensagem.innerHTML = '')
fahrenheit.addEventListener('click', () => mensagem.innerHTML = '')
kelvin.addEventListener('click', () => mensagem.innerHTML = '')
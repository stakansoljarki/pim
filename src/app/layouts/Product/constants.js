import chemicalIcon from './images/chemical.svg'
import cloudIcon from './images/clouds.svg'
import smartphoneIcon from './images/smartphone.svg'
import timerIcon from './images/timer.svg'
import wavesIcon from './images/waves.svg'
import economyIcon from './images/economy.svg'
import trackIcon from './images/track.svg'
import weightIcon from './images/weight.svg'
import lightingIcon from './images/lighting.svg'
import thermometerIcon from './images/thermometer.svg'
import strengthIcon from './images/strength.svg'

const productData = [
    {
        id: '1',
        src: `${strengthIcon}`,
        alt: '',
        title: 'Висока міцність',
        description: 'У 2,5-3 рази міцніша на розрив, ніж сталева однакового діаметру',
    },
    {
        id: '2',
        src: `${timerIcon}`,
        alt: '',
        title: 'Довгий термін служби',
        description: 'Триваліший у 2-3 рази період експлуатації (50-80 років), порівнюючи зі сталевою',
    },
    {
        id: '3',
        src: `${wavesIcon}`,
        alt: '',
        title: 'Низька теплопровідність',
        description: 'Значно знижує тепловтрати',
    },
    {
        id: '4',
        src: `${thermometerIcon}`,
        alt: '',
        title: 'Термостійкість',
        description: 'Не змінює своїх характеристик у діапазоні від -70 °С до + 100 °С.',
    },
    {
        id: '5',
        src: `${cloudIcon}`,
        alt: '',
        title: 'Корозійна стійкість',
        description: 'Не схильна до корозії, що збільшує термін експлуатації бетону і спрощує зберігання',
    },
    {
        id: '6',
        src: `${chemicalIcon}`,
        alt: '',
        title: 'Хімічна стійкість',
        description: 'Стійкість до впливу агресивних хімічних засобів',
    },
    {
        id: '7',
        src: `${smartphoneIcon}`,
        alt: '',
        title: 'Радіопрозорість',
        description: 'Не створює екрану і перешкод для радіохвиль, мобільного зв\'язку та Wi-Fi',
    },
    {
        id: '8',
        src: `${lightingIcon}`,
        alt: '',
        title: 'Діелектрик',
        description: 'Не проводить електричний струм, електробезпечна, не намагнічується',
    },
    {
        id: '9',
        src: `${weightIcon}`,
        alt: '',
        title: 'Відносно невелика вага',
        description: 'Вага в 4 рази менша, ніж у сталевої арматури',
    },
    {
        id: '10',
        src: `${trackIcon}`,
        alt: '',
        title: 'Зручність транспортування',
        description: 'Арматура продається бухтами, що дозволяє перевозити її в багажнику легкового автомобіля',
    },
    {
        id: '11',
        src: `${economyIcon}`,
        alt: '',
        title: 'Економічність',
        description: 'Економія до 30% при заміні сталевої арматури на композитну',
    },
]

export default productData;
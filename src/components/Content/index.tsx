import { Wrapper, Footer, Main, Head, ContentLeft, Input, Button, ContentRight, BoxContainer, BigBoxContainer, ArrowLeftImg } from "./styles"
import logoImg from '../../assets/imc-logo.png'
import { FormEvent, useState } from "react"
import { SmallBox } from "../SmallBox"
import { levels, calculateImc, Level } from '../../helpers/imc'
import { BigBox } from "../BigBox"
import { ArrowLeft } from "phosphor-react"

export function Content() {
    const [height, setHeight] = useState<number>(0)
    const [weight, setWeight] = useState<number>(0)
    const [result, setResult] = useState<Level | null>(null)

    function handleCalculate(event: FormEvent) {
        event.preventDefault()
        if (height && weight) {

            setResult(calculateImc(height, weight))

        } else {
            alert('Para calcular o IMC é necessário preencher todos os campos!')
        }
    }

    function HandleBackButton() {
        setResult(null)
        setHeight(0)
        setWeight(0)
    }

    return (
        <>
            <Head>
                <h1>
                    Calculadora de IMC
                </h1>
            </Head>
            <Wrapper>
                <Main>
                    <ContentLeft>
                        <h1>
                            Calcule o seu IMC.
                        </h1>
                        <p>
                            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
                        </p>
                        <form onSubmit={handleCalculate}>
                            <Input
                                type="number"
                                onChange={e => setHeight(parseFloat(e.target.value))}
                                value={height > 0 ? height : ''}
                                placeholder="Digite a sua altura. EX: 1.5 (em metros)"
                                disabled={result ? true : false}
                            />
                            <Input
                                type="number"
                                onChange={e => setWeight(parseFloat(e.target.value))}
                                value={weight > 0 ? weight : ''}
                                placeholder="Digite o seu peso. EX: 75.3 (em kg)"
                                disabled={result ? true : false}
                            />

                            <Button
                                disabled={result ? true : false}
                            >
                                Calcular
                            </Button>
                        </form>
                    </ContentLeft>

                    <ContentRight>
                        {!result ?
                            <BoxContainer>
                                {levels.map((item) => {
                                    return <SmallBox key={item.title} item={item} />
                                })}
                            </BoxContainer>
                            :
                            <BigBoxContainer>
                                <ArrowLeftImg onClick={HandleBackButton}>
                                    <ArrowLeft size={52} />
                                </ArrowLeftImg>
                                <BigBox item={result} />
                            </BigBoxContainer>
                        }
                    </ContentRight>
                </Main>

                <Footer>
                    <img src={logoImg} alt="" />
                </Footer>
            </Wrapper>
        </>
    )
}
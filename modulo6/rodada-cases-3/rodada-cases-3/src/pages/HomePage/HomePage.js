import { useState } from "react"
import {Container, Sidebar, Main, Header_Sidebar, Main_Sidebar, Footer_Sidebar, Select, Logo, Footer_Main, ButtonNumber} from "./styled"
import {useRequestData} from "../../hooks/useRequestData"
import {BASE_URL} from "../../constantes/BASE_URL"
import { Color } from "../../constantes/colors"
import clover from "../../assets/clover.svg"
import Moment from 'moment';

const HomePage = () => {
    const [ data ] = useRequestData([],`${BASE_URL}/loterias`);
    const [concursos] = useRequestData([], `${BASE_URL}/loterias-concursos`);
    const [loterias, setLoterias] = useState(0);
    const [valor , setValor ] = useState(2359);
    
//Controlando o valor do select
  const handleChange = (event) => {
    setLoterias(event.target.value);
    switch (event.target.value) {
      case "mega-sena":
        setValor(2359)
        break
      case "quina":
        setValor(5534)
        break
      case "lotofácil":
        setValor(2200)
        break
      case "lotomania":
        setValor(2167)
        break
      case "timemania":
        setValor(1622)
        break
      case "dia de sorte":
        setValor(440)
        break
      default:
        setValor(2359);        
    }
  };

  //Buscando o nome do jogo
  const nomeLoteria = data?.filter((loteria) => { 
    return loterias === loteria.nome
  })

  //Vou filtrar o id da loteria-concurso pelo id do select
  const loteriaconcurso = concursos?.filter((loteria) => {
    return loterias === loteria.loteriaId
  });

  const [resultadoConcurso] = useRequestData([],`${BASE_URL}/concursos/${valor}`);

  var dataDoConcurso = `${new Date(resultadoConcurso.data)}`;
  var date = Moment(dataDoConcurso).format('DD/MM/YYYY');

console.log(resultadoConcurso)

    return (
        <Container>
            <Sidebar style={{backgroundColor: Color(nomeLoteria?.[0]?.nome)}}> 
                <Header_Sidebar>
                    <Select name="loterias" value={loterias} onChange={handleChange}>
                    <option value="mega-sena">Mega-Sena</option>
                    <option value="quina">Quina</option>
                    <option value="lotofácil">Lotofácil</option>
                    <option value="lotomania">Lotomania</option>
                    <option value="timemania">Timemania</option>
                    <option value="dia de sorte">Dia de Sorte</option>
                    </Select>
                    </Header_Sidebar>
                    <Main_Sidebar>
                        <Logo src={clover} alt="logo"/>
                        {nomeLoteria?.[0]?.nome === undefined ? (<p>MEGA-SENA</p>) :
                        nomeLoteria?.[0]?.nome.toUpperCase()}
                        </Main_Sidebar>
                    <Footer_Sidebar>CONCURSO N {valor} - {date}</Footer_Sidebar>
                    </Sidebar>
                <Main>
                    <div>{resultadoConcurso.numeros &&
            resultadoConcurso.numeros?.map((numbers) => {
              return (
                <ButtonNumber key={Math.random()}>
                  {numbers}
                </ButtonNumber>
              );
            })}</div>
                    <Footer_Main>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</Footer_Main>
                </Main>          
        </Container>
    )
}
export default HomePage
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'

const CityApi = () => {
    const [city, setCity] = useState("");
    const [student, setStudent] = useState([]);

    const onChangeEvent = (event) => {

        setCity(event.target.value);
        console.log(city)
    }
    useEffect(() => {
        axios.get("http://localhost:4000/students").then((response) => {
            setStudent(response.data)
            console.log(student)
        }).catch(err => console.log(err))
    }, [])

    return (
        <div>
            
            <Container fluid>
            <Alert variant="danger">
                    Student-City
                </Alert>
            <Card>
                <Card.Header>city</Card.Header>
                <Card.Body>
                <select className="form-select" onChange={onChangeEvent}>
                <option disabled>Open this select menu</option>
                {student.map((d) => {
                    return <option key={d.id} value={d.city}>{d.city}</option>
                })}
            </select>
                </Card.Body>
            </Card>
            </Container>
       

            <div>
                {student.filter(x => x.city == city).map((d) => {
                    return (<>
                      <Container fluid>
                        <Card>
                            <Card.Header>Student details</Card.Header>
                            <Card.Body>
                          
                                <h4>id:{d.id}</h4>
                                <h4>city:{d.city}</h4>
                                <h4>name:{d.name}</h4>
                                <h4>age:{d.age}</h4>
                            </Card.Body>
                        </Card>
                        </Container>
                    </>)
                })}
            </div>
        </div>
    )
}
export default CityApi;
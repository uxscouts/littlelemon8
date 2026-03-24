

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


const BookingForm = () => {
    return (
        <Form className="BookingForm">
            <FormGroup>
                <Label htmlFor="res-date">Choose date</Label>
                <Input type="date" id="res-date" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="res-time">Choose time</Label>
                <Input type="select" id="res-time">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="guests">Number of guests</Label>
                <Input type="number" placeholder={1} min={1} max={10} id="guests" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="occasion">Occasion</Label>
                <Input type="select" id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </Input>
            </FormGroup>
            <Button type="submit">Make Your reservation</Button>
        </Form>
    )
}

export default BookingForm;
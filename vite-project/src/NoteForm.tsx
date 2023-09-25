import { Col, Form, Row, Stack } from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable"

export function NoteForm() {
    return <Form>
        <Stack gap={5}>
            <Row>
                <Col>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control required />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="">
                    <Form.Label>Tags</Form.Label>
                    <CreatableReactSelect isMulti/>
                </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="markdown">
                <Form.Label>Body</Form.Label>
                <Form.Control required />
            </Form.Group>



        </Stack>
    </Form>
}
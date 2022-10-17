import {Form,Input} from "reactstrap"
export const EditCourses = () => {
  return (
    <div className="d-flex justify-content-center">
      <Form style={{width: '75%'}}>
        <Input bsSize="lg" className="mb-3" placeholder="lg" />
        <Input className="mb-3" placeholder="default" />
        <Input bsSize="sm" className="mb-3" placeholder="sm" />
        <Input bsSize="lg" className="mb-3" type="select">
          <option>Large Select</option>
        </Input>
        <Input className="mb-3" type="select">
          <option>Default Select</option>
        </Input>
        <Input bsSize="sm" className="mb-3" type="select">
          <option>Small Select</option>
        </Input>
      </Form>
    </div>
  );
};

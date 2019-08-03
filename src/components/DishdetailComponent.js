import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {

    static renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div/>
            );
    }

    static renderComments(dish) {
        if (dish != null) {
            const comments = dish.comments.map((comment) => {
                const date = new Intl.DateTimeFormat('en-US').format(new Date(comment.date));
                return (<div>
                        {comment.comment}<br/>
                        -- {comment.author},{date}<br/>
                    </div>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    <div className="col-12 col-md-5 m-1">
                        {comments}
                    </div>
                </div>
            );
        } else
            return (
                <div/>
            );
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {DishDetail.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {DishDetail.renderComments(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;

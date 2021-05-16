import React from "react";
import {ServiceConsumer} from "../bookstore-service-context";

const withBookstoreService = (mapContextToProps) => (Wrap) => {
    return (props) => {
        return (
            <ServiceConsumer>
                {(service) => {
                  const mappedProps = mapContextToProps(service);

                  return <Wrap {...props} {...mappedProps}/>  
                }}
            </ServiceConsumer>
        )
    }
};

export default withBookstoreService;
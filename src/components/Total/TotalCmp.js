import React from 'react'
import './Total.css'

export default function ({ total, setTotal }) {
    const numberWithCommas = (x) => {
        return parseFloat(x).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-12 col-sm-12">
                    <div className="card totaldetail__card rounded">
                        <div className="card-body p-3">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="h2 font-weight-bold">
                                    Total Price
                                </div>
                                <div className="h3 font-weight-bold text-end">
                                    $ {numberWithCommas(total)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

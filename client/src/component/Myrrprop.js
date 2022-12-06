import React, { useContext, useEffect } from "react";
import propertyContext from "../context/PropertyContext";
import Modal from "./Modal";
const Myrrprop = () => {
  const context = useContext(propertyContext);
  const {
    dash,
    Userrrprop,
    rrproplead,
    rrprolead,
    paymentreq,
    gethandle,
    gethandler,
    handreq,handlerowner,accepthandler
  } = context;
  useEffect(() => {
    Userrrprop();
    gethandler();
    // console.log(dash);
  }, []);

  return (
    <div className="">
      {dash.map((propert) => {
        return (
          <div className="row">
            <div className="col-12 m-2 border border-dark">
              <p>{propert.title}</p>
              <p>{propert.description}</p>
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => rrproplead(propert._id)}
              >
                property leads
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      {rrprolead.map((userled) => {
                        return (
                          <div>
                            {userled.property_is_open && (
                              <div>
                                <p>{userled.property_user_id}</p>
                                {userled.property_closure_requested ? (
                                  <button
                                    onClick={() => paymentreq(userled._id)}
                                  >
                                    Pay Req
                                  </button>
                                ) : (
                                  <button onClick={() => {}}>Reject</button>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <button
                type="button"
                class="btn "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
                onClick={()=>handreq(propert._id)}
              >
                Check handler
              </button> */}
              {/* <div
                class="modal fade"
                id="exampleModal2"
                tabindex="-1"
                aria-labelledby="exampleModalLabel2"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel2">
                        Handler Request
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      {gethandle.map((user) => {
                        return (
                          <div>
                            <span>{user.broker_id}</span>
                            {!user.property_broker_requested && (
                              <button onClick={()=>accepthandler(user._id)}>Accept</button>
                            )}
                            <hr />
                          </div>
                        );
                      })}
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Myrrprop;

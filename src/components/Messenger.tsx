import React from 'react'
import {Icon} from './svg-icons/Icon'
import SVGfile from './svg-icons/icons-sprite.svg'

export const Messenger = () => {
    return (
        <div className="messenger">
            <div className="messenger__header">
                <p>Questions Messenger</p>
            </div>
            <div className="messenger__content">
                <div className="message_card">
                    <div className="message_card__condition">
                        <div className="message_card__question">
                            <p>Q2718</p>
                        </div>
                        <Icon name="checkmark" file={SVGfile}/>
                        <div className="message_card__status">
                            <p>Time</p>
                        </div>
                    </div>
                    <div className="message_card__content">
                        <p className="message">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur debitis
                            ducimus explicabo fuga iusto modi nemo quas recusandae sit.
                        </p>
                        <div className="message_card__management">
                            <p className="time">27 Jul 2021 12:20</p>
                            <button className="plus_button button_primary">
                                <Icon name="plus" file={SVGfile}/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="message_card">
                    <div className="message_card__condition message_card__condition_closed">
                        <div className="message_card__question">
                            <p>Q2718</p>
                        </div>
                        <Icon name="checkmark" file={SVGfile}/>
                        <div className="message_card__status">
                            <p>Closed</p>
                        </div>
                    </div>
                    <div className="message_card__content">
                        <p className="message">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi architecto aut autem
                            delectus dignissimos, ea facere fugit illum in, incidunt inventore ipsam labore magnam
                            minima mollitia nihil nisi nobis perspiciatis quae quam quas repudiandae saepe sequi totam
                            ut vitae voluptatum. Animi deleniti deserunt distinctio dolores necessitatibus, repellat
                            velit veniam.
                        </p>
                        <div className="message_card__management">
                            <p className="time">27 Jul 2021 12:20</p>
                            <button className="plus_button button_primary">
                                <Icon name="plus" file={SVGfile}/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="message_card">
                    <div className="message_card__condition message_card__condition_closed">
                        <div className="message_card__question">
                            <p>Q2718</p>
                        </div>
                        <Icon name="checkmark" file={SVGfile}/>
                        <div className="message_card__status">
                            <p>Closed</p>
                        </div>
                    </div>
                    <div className="message_card__content">
                        <p className="message">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur debitis
                            ducimus explicabo fuga iusto modi nemo quas recusandae sit.
                        </p>
                        <div className="message_card__management">
                            <p className="time">27 Jul 2021 12:20</p>
                            <button className="plus_button button_primary">
                                <Icon name="plus" file={SVGfile}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <form className="messenger__form">
                <textarea className="textarea_input"
                          placeholder="Enter new message..."/>
                <button className="send_button button_primary">
                    <Icon name="send" file={SVGfile}/>
                </button>
            </form>
        </div>
    )
}
import React, { Component } from 'react';
import './app-frame.scss';

export default class AppFrame extends Component {

    getRandomDivBlock(slanted = false, fill = true) {
        let className = 'pseudo-photo-frame';

        if (fill) {
            className += ' flex-fill';
        }

        if (slanted) {
            className += ' slanted';
        }
        return <div className={className}></div>
    }

    render() {
        return <div className="root h-100 d-flex flex-column">
            <div className="top d-flex">
                {this.getRandomDivBlock(true, false)}
                {this.getRandomDivBlock()}
                <header>
                    <h1>Memories Gallery</h1>
                </header>
                {this.getRandomDivBlock()}
                {this.getRandomDivBlock(true, false)}
            </div>
            <div className="content flex-fill d-flex">
                <div className="left d-flex flex-column">
                    {this.getRandomDivBlock()}
                    {this.getRandomDivBlock()}
                    {this.getRandomDivBlock()}
                    {this.getRandomDivBlock()}
                    {this.getRandomDivBlock()}
                </div>
                <div className="flex-fill m-4">
                    Hello
                </div>
                <div className="right d-flex flex-column">
                    {this.getRandomDivBlock()}
                    {this.getRandomDivBlock()}
                    {this.getRandomDivBlock()}
                    {this.getRandomDivBlock()}
                    {this.getRandomDivBlock()}
                </div>
            </div>
            <div className="bottom d-flex">
                {this.getRandomDivBlock(true, false)}
                {this.getRandomDivBlock()}
                <footer>
                    <h6>Made by <a target="_blank" rel="noreferrer" href="https://www.sahilmalik.dev/">sahilmalik.dev</a></h6>
                </footer>
                {this.getRandomDivBlock()}
                {this.getRandomDivBlock(true, false)}
            </div>
        </div>;
    }
}
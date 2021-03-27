import React, { Component } from 'react'

export default class TicTacToe extends Component {
    constructor(){
        super()
        this.state = {
            players : 
            [
                {id : 1, name : 'Player 1', symbol : 'X'},
                {id : 2, name : 'Player 2', symbol : 'O'}
            ],
            player1 : 'Player 1',
            player1symbol :  'X', 
            player1status : 'Playing..',
            player2 : 'Player 2',
            player2symbol:  'O',
            player2status : 'Playing..',
            playingCurrently : '',
            nextPlayer : '',
            turnCount : 1,
            switchSymOn : true,
            itsAgame : false,
            board : 
            [
                {id : 1, value : '1', disableCell: false},
                {id : 2, value : '2', disableCell: false},
                {id : 3, value : '3', disableCell: false},
                {id : 4, value : '4', disableCell: false},
                {id : 5, value : '5', disableCell: false},
                {id : 6, value : '6', disableCell: false},
                {id : 7, value : '7', disableCell: false},
                {id : 8, value : '8', disableCell: false},
                {id : 9, value : '9', disableCell: false}
            ],

            availpos : [1,2,3,4,5,6,7,8,9]
            
        }   
    }
    startGame = () => {
        this.setState({gameStarted : true,
            playingCurrently : this.state.player1,
            nextPlayer : this.state.player2
        })
    }

    resetGame=() => {
        this.setState({
            player1status : 'Playing..',
            player2status : 'Playing..',
            playingCurrently : this.state.player1,
            nextPlayer : this.state.player2,
            turnCount : 1,
            switchSymOn : true,
            itsAgame : false,
            board : 
            [
                {id : 1, value : '1', disableCell: false},
                {id : 2, value : '2', disableCell: false},
                {id : 3, value : '3', disableCell: false},
                {id : 4, value : '4', disableCell: false},
                {id : 5, value : '5', disableCell: false},
                {id : 6, value : '6', disableCell: false},
                {id : 7, value : '7', disableCell: false},
                {id : 8, value : '8', disableCell: false},
                {id : 9, value : '9', disableCell: false}
            ],
            availpos : [1,2,3,4,5,6,7,8,9]
        })
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    checkforGame = () =>{
        let itemList = this.state.board.slice()
        let arr = itemList.filter((item) => ([1,2,3].includes(item.id)))
        if (arr[0].value === arr[1].value && arr[0].value === arr[2].value){
            if(arr[0].value === this.state.player1symbol){
                return 'winner-player1'
            } else {
                return 'winner-player2'
            }
        }

        arr = itemList.filter((item) => ([4,5,6].includes(item.id)))
        if (arr[0].value === arr[1].value && arr[0].value === arr[2].value){
            if(arr[0].value === this.state.player1symbol){
                return 'winner-player1'
            } else {
                return 'winner-player2'
            }
        }

        arr = itemList.filter((item) => ([7,8,9].includes(item.id)))
        if (arr[0].value === arr[1].value && arr[0].value === arr[2].value){
            if(arr[0].value === this.state.player1symbol){
                return 'winner-player1'
            } else {
                return 'winner-player2'
            }
        }

        arr = itemList.filter((item) => ([1,4,7].includes(item.id)))
        if (arr[0].value === arr[1].value && arr[0].value === arr[2].value){
            if(arr[0].value === this.state.player1symbol){
                return 'winner-player1'
            } else {
                return 'winner-player2'
            }
        }

        arr = itemList.filter((item) => ([2,5,8].includes(item.id)))
        if (arr[0].value === arr[1].value && arr[0].value === arr[2].value){
            if(arr[0].value === this.state.player1symbol){
                return 'winner-player1'
            } else {
                return 'winner-player2'
            }
        }

        arr = itemList.filter((item) => ([3,6,9].includes(item.id)))
        if (arr[0].value === arr[1].value && arr[0].value === arr[2].value){
            if(arr[0].value === this.state.player1symbol){
                return 'winner-player1'
            } else {
                return 'winner-player2'
            }
        }

        arr = itemList.filter((item) => ([1,5,9].includes(item.id)))
        if (arr[0].value === arr[1].value && arr[0].value === arr[2].value){
            if(arr[0].value === this.state.player1symbol){
                return 'winner-player1'
            } else {
                return 'winner-player2'
            }
        }

        

        arr = itemList.filter((item) => ([7,5,3].includes(item.id)))
        if (arr[0].value === arr[1].value && arr[0].value === arr[2].value){
            if(arr[0].value === this.state.player1symbol){
                return 'winner-player1'
            } else {
                return 'winner-player2'
            }
        }

        return ''
    }

    

    updateBoard = (event) =>{
        let cell_id = event.target.name

        this.setState({
            board :  this.state.board.map(cell => { 
                if(cell.id == cell_id){
                    if(this.state.turnCount%2){
                        cell.value=this.state.player1symbol
                    } else {
                        cell.value=this.state.player2symbol
                    }
                    cell.disableCell = true
                }
                console.log("cell_id " + cell_id + " : " +cell.value)
                return cell
            }),
            availpos : this.state.availpos.filter((item) => item != cell_id),
            turnCount : this.state.turnCount + 1,
            switchSymOn : false
        })

        let winner = this.checkforGame()
        if(winner === 'winner-player1'){
            this.setState( {
                player1status : 'Winner',
                player2status : ''
            })
        } else if(winner === 'winner-player2') {
            this.setState( {
                player1status : '',
                player2status : 'Winner'
            })
        }
        
        if(this.state.turnCount === 9 || winner){
            this.setState({ 
                board :  this.state.board.map(cell => {cell.disableCell = true 
                    return cell
                    }),
                playingCurrently : '',
                nextPlayer : '',
                turnCount : 'Game Over!',
                itsAgame : true
            })
        } else if(this.state.turnCount%2){
            this.setState( { 
                playingCurrently : this.state.player2,
                nextPlayer : this.state.player1
            })
        } else {
            this.setState( { 
                playingCurrently : this.state.player1,
                nextPlayer : this.state.player2
            })
        }
 
    }

    switchSymbols = () => {
        let p1Sym = this.state.player1symbol
        let p2Sym = this.state.player2symbol
        this.setState({
            player1symbol : p2Sym,
            player2symbol : p1Sym
        })
    }

    render() {
        return (
            <div className="container"> 
                <div className="table-responsive">
                    <table className='table table-striped table-bordered table-sm'>
                        <thead className='thead-light'>
                            <td>Player Name</td>
                            <td>Player Symbol</td>
                            <td>Status</td>
                        </thead>
                        <tbody> 
                            <tr>
                                <td>Player 1 : <input type="text" name="player1" value={this.state.player1} onChange={this.handleChange}/></td>
                                <td>{this.state.player1symbol}</td>
                                <td>{this.state.player1status}</td>
                            </tr>
                            <tr>
                                <td>Player 2 : <input type="text" name="player2" value={this.state.player2} onChange={this.handleChange}/></td>
                                <td>{this.state.player2symbol}</td>
                                <td>{this.state.player2status}</td>
                            </tr>
                            <tr>
                                <td>{!this.state.gameStarted && <button className="btn btn-success" onClick={this.startGame} name="gameStart" >Start the Game!</button>}</td>
                                <td><button className="btn btn-success" disabled={!this.state.switchSymOn} onClick={this.switchSymbols} name="switchSymbols">Switch Symbols</button></td> 
                                <td>{!this.state.itsAgame && <button className="btn btn-warning" onClick={this.resetGame} name="resetGame">RESET GAME!</button>}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                { this.state.gameStarted && <>
                    <table className='table table-striped table-bordered table-sm'>
                        <tbody>
                                
                            { !this.state.itsAgame && <>
                                <tr><td>Current Turn :=> {this.state.turnCount}</td> 
                                    <td className="info">Next Turn will be for: {this.state.nextPlayer} </td>
                                </tr> 
                                <tr>
                                    <td>Current Turn is for: {this.state.playingCurrently}</td>
                                    <td>
                                        {this.state.availpos.map(pos => <button className="btn btn-success" name= {pos} onClick={this.updateBoard}style={{"font-size": "16px", "padding": "10px 20px", width: "20px"}}>{pos}</button>)}
                                    </td>
                                </tr>
                            </>}

                            { this.state.itsAgame && <tr> <td><button className="btn btn-info" onClick={this.resetGame} name="playAgain">Play Again..</button></td></tr>}
                        </tbody>    
                    </table>
                    
                    <table className='table table-striped table-bordered table-sm'>
                        <thead className="table-info">
                            <th>TIC</th>
                            <th>TAC</th>
                            <th>TOE</th>
                        </thead>
                        {/*<tr>
                            <td style={{color: "red", "font-size" : "60px", "background-color" : [this.state.gameColor]}}>{this.state.board[0].value} </td>
                             <td style={{color: "red", "font-size" : "60px"}}>{this.state.board[1].value} </td>
                            <td style={{color: "red", "font-size" : "60px"}}>{this.state.board[2].value} </td>
                        </tr>
                        <tr>
                            <td style={{color: "red", "font-size" : "60px"}}>{this.state.board[3].value} </td>
                            <td style={{color: "red", "font-size" : "60px"}}>{this.state.board[4].value} </td>
                            <td style={{color: "red", "font-size" : "60px"}}>{this.state.board[5].value} </td>
                        </tr>
                        <tr>
                            <td style={{color: "red", "font-size" : "60px"}}>{this.state.board[6].value} </td>
                            <td style={{color: "red", "font-size" : "80px"}}>{this.state.board[7].value} </td>
                            <td style={{color: "red", "font-size" : "60px"}}>{this.state.board[8].value} </td>
                        </tr>*/}
                        <tbody>
                            <tr>
                                <td><button disabled={this.state.board[0].disableCell} className="btn btn-success" name={this.state.board[0].id}  onClick={this.updateBoard}style={{"fontSize": "60px", width: "80px"}}>{this.state.board[0].value}</button></td>
                                <td><button disabled={this.state.board[1].disableCell} className="btn btn-success" name={this.state.board[1].id}  onClick={this.updateBoard}style={{"fontSize": "60px", width: "80px"}}>{this.state.board[1].value}</button></td>
                                <td><button disabled={this.state.board[2].disableCell} className="btn btn-success" name={this.state.board[2].id}  onClick={this.updateBoard}style={{"fontSize": "60px", width: "80px"}}>{this.state.board[2].value}</button></td>
                            </tr>
                            <tr>
                                <td><button disabled={this.state.board[3].disableCell} className="btn btn-success" name={this.state.board[3].id}  onClick={this.updateBoard}style={{"fontSize": "60px", width: "80px"}}>{this.state.board[3].value}</button></td>
                                <td><button disabled={this.state.board[4].disableCell} className="btn btn-success" name={this.state.board[4].id}  onClick={this.updateBoard}style={{"fontSize": "60px", width: "80px"}}>{this.state.board[4].value}</button></td>
                                <td><button disabled={this.state.board[5].disableCell} className="btn btn-success" name={this.state.board[5].id}  onClick={this.updateBoard}style={{"fontSize": "60px", width: "80px"}}>{this.state.board[5].value}</button></td>
                            </tr>
                            <tr>
                                <td><button disabled={this.state.board[6].disableCell} className="btn btn-success" name={this.state.board[6].id}  onClick={this.updateBoard}style={{"fontSize": "60px", width: "80px"}}>{this.state.board[6].value}</button></td>
                                <td><button disabled={this.state.board[7].disableCell} className="btn btn-success" name={this.state.board[7].id}  onClick={this.updateBoard}style={{"fontSize": "60px", width: "80px"}}>{this.state.board[7].value}</button></td>
                                <td><button disabled={this.state.board[8].disableCell} className="btn btn-success" name={this.state.board[8].id}  onClick={this.updateBoard}style={{"fontSize": "60px", width: "80px"}}>{this.state.board[8].value}</button></td>
                            </tr>
                        </tbody>
                    </table>
                </>}    
            </div>
        )
    }
}

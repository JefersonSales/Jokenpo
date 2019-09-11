import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet, Image, Text, Alert } from 'react-native'
import { MeuBotao } from './components'

import pedra from './assets/pedra.png'
import papel from './assets/papel.png'
import tesoura from './assets/tesoura.png'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			image: null,
		}
	}
	render() {
		return (
			<SafeAreaView style={styles.safe}>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Image style={{ width: 100, height: 100 }} source={this.state.image} />
				</View>
				<View style={{ flex: 1 }}>
					<Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginBottom: 30 }}>
						Selecione sua jogada
					</Text>
					<View style={[{ flexDirection: 'row', justifyContent: 'space-evenly' }]}>
						<MeuBotao text="Pedra" source={pedra} onPress={() => this.jogar('pedra')} />
						<MeuBotao text="Papel" source={papel} onPress={() => this.jogar('papel')} />
						<MeuBotao text="Tesoura" source={tesoura} onPress={() => this.jogar('tesoura')} />
					</View>
				</View>
			</SafeAreaView>
		)
	}

	jogar(jogador) {
		let jogada = this.sortearJogada()
		this.setState({ image: this.exibirJogada(jogada) })
		Alert.alert(this.informarVencedor(jogador, jogada))
	}

	sortearJogada() {
		const jogadas = ['pedra', 'papel', 'tesoura']
		let indice = Math.floor(Math.random() * jogadas.length)
		return jogadas[indice]
	}

	informarVencedor(jogador, computador) {
		if (jogador === computador) return 'Empate'
		else if (jogador === 'pedra' && computador !== 'papel') return 'Jogador vence'
		else if (jogador === 'papel' && computador !== 'tesoura') return 'Jogador vence'
		else if (jogador === 'tesoura' && computador !== 'pedra') return 'Jogador vence'
		else return 'Computador vence'
	}

	exibirJogada(jogada) {
		switch (jogada) {
			case 'pedra':
				return pedra
			case 'papel':
				return papel
			case 'tesoura':
				return tesoura
		}
	}
}

const styles = StyleSheet.create({
	safe: {
		backgroundColor: '#fff',
		flex: 1,
	},
})

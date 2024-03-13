import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {
	BORDERRADIUS,
	COLORS,
	FONTFAMILY,
	FONTSIZE,
	SPACING
} from '../theme/theme'
import {AppHeaderProps} from '../types'
import CustomIcon from './CustomIcon'

const AppHeader = ({action, name, header}: AppHeaderProps) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.iconBG} onPress={() => action()}>
				<CustomIcon name={name} style={styles.iconStyle} />
			</TouchableOpacity>
			<Text style={styles.headerText}>{header}</Text>
			<View style={styles.emptyContainer}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	iconStyle: {
		color: COLORS.White,
		fontSize: FONTSIZE.size_24
	},
	headerText: {
		flex: 1,
		fontFamily: FONTFAMILY.poppins_medium,
		fontSize: FONTSIZE.size_20,
		textAlign: 'center',
		color: COLORS.White
	},
	emptyContainer: {
		height: SPACING.space_20 * 2,
		width: SPACING.space_20 * 2
	},
	iconBG: {
		height: SPACING.space_20 * 2,
		width: SPACING.space_20 * 2,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: BORDERRADIUS.radius_20,
		backgroundColor: COLORS.Orange
	}
})

export default AppHeader

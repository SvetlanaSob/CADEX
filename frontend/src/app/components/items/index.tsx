'use client'
import { useEffect, useState } from 'react'
import {
	ArticleItemsContainerSC,
	H4ItemsTitleSC,
	PItemsDescriptionSC,
} from './styles.items'
import { HashLoader } from 'react-spinners'
import { DivSec2ListColumnsSC } from '../section2/styles.sec2'

interface Data {
	id: string
	name: string
	email: string
	message: string
}

const Items = () => {
	const [data, setData] = useState<Data[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const fetchData = async () => {
		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/getData`)
			if (!response.ok) {
				throw new Error('Ошибка сети')
			}
			const data: Data[] = await response.json()
			setData(data)
			setIsLoading(false)
		} catch (error) {
			console.error('Ошибка получения данных:', error)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<>
			{isLoading ? (
				<HashLoader color="#3700ff"/>
			) : (
				<DivSec2ListColumnsSC>
					{data.map((item) => (
						<ArticleItemsContainerSC key={item.id}>
							<H4ItemsTitleSC>{item.name}</H4ItemsTitleSC>
							<PItemsDescriptionSC>
								{item.message}
							</PItemsDescriptionSC>
						</ArticleItemsContainerSC>
					))}
				</DivSec2ListColumnsSC>
			)}
		</>
	)
}

export default Items

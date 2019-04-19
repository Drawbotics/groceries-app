import React from 'react';
import styles from './ListItem.module.scss';
import Checkbox from '../Checkbox/Checkbox';
import AppContext from '../../context';
import { FaTrash } from 'react-icons/fa';

const ListItem = ({ name, quantity, isBought }) => (
	<AppContext.Consumer>
		{(context) => (
			<li className={styles.wrapper}>
				<div className={styles.subWrapper}>
					<div className={styles.infoWrapper}>
						<div className={styles.info}>
							{!isBought ? (
								<>
									<h3>Name: </h3>
									<h3 className={styles.itemName}>{name}</h3>
								</>
							) : (
									<>
										<h3>Name: </h3>
										<h3 className={styles.itemNameBought}>{name}</h3>
									</>
								)}

						</div>
						<div className={styles.info}>
							{!isBought ? (
								<>
									<h3>Quantity: </h3>
									<p className={styles.itemQuantity}>{quantity}</p>
								</>
							) : (
									<>
										<h3>Quantity: </h3>
										<p className={styles.itemQuantityBought}>{quantity}</p>
									</>
								)}

						</div>
					</div>
					<div className={styles.checkbox}>
						<Checkbox name="completed"
							checked={isBought ? true : false}
							onChange={() => context.markAsCompleted(name)} />
					</div>
					<div className={styles.remove}>
						{!isBought ? (
							<FaTrash onClick={() => context.deleteItem(name)} />
						) : (
								null
							)}

					</div>
				</div>
			</li>
		)}

	</AppContext.Consumer>
);

export default ListItem;
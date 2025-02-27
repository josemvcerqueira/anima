import {PUBLISHED_AT} from "..";
import {obj} from "../../_framework/util";
import {Transaction, TransactionObjectInput} from "@mysten/sui/transactions";

export interface AssertAccoladesRoleArgs { accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function assertAccoladesRole( tx: Transaction, args: AssertAccoladesRoleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::admin::assert_accolades_role`, arguments: [ obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AssertAvatarSettingsRoleArgs { accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function assertAvatarSettingsRole( tx: Transaction, args: AssertAvatarSettingsRoleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::admin::assert_avatar_settings_role`, arguments: [ obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AssertGenesisMinterRoleArgs { accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function assertGenesisMinterRole( tx: Transaction, args: AssertGenesisMinterRoleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::admin::assert_genesis_minter_role`, arguments: [ obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AssertProfilePicturesRoleArgs { accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function assertProfilePicturesRole( tx: Transaction, args: AssertProfilePicturesRoleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::admin::assert_profile_pictures_role`, arguments: [ obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AssertReputationRoleArgs { accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function assertReputationRole( tx: Transaction, args: AssertReputationRoleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::admin::assert_reputation_role`, arguments: [ obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AssertUpgradesRoleArgs { accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function assertUpgradesRole( tx: Transaction, args: AssertUpgradesRoleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::admin::assert_upgrades_role`, arguments: [ obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export function init( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::admin::init`, arguments: [ ], }) }

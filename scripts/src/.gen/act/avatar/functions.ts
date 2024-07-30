import {PUBLISHED_AT} from "..";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {ID} from "../../_dependencies/source/0x2/object/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface NewArgs { registry: TransactionObjectInput; imageUrl: string | TransactionArgument }

export function new_( tx: Transaction, args: NewArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::new`, arguments: [ obj(tx, args.registry), pure(tx, args.imageUrl, `${String.$typeName}`) ], }) }

export interface TransferArgs { self: TransactionObjectInput; recipient: string | TransactionArgument }

export function transfer( tx: Transaction, args: TransferArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::transfer`, arguments: [ obj(tx, args.self), pure(tx, args.recipient, `address`) ], }) }

export function keep( tx: Transaction, avatar: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::keep`, arguments: [ obj(tx, avatar) ], }) }

export interface UpgradeArgs { self: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput; url: string | TransactionArgument }

export function upgrade( tx: Transaction, args: UpgradeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::upgrade`, arguments: [ obj(tx, args.self), obj(tx, args.accessControl), obj(tx, args.admin), pure(tx, args.url, `${String.$typeName}`) ], }) }

export function init( tx: Transaction, otw: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::init`, arguments: [ obj(tx, otw) ], }) }

export interface AssertNoAvatarArgs { self: TransactionObjectInput; addr: string | TransactionArgument }

export function assertNoAvatar( tx: Transaction, args: AssertNoAvatarArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::assert_no_avatar`, arguments: [ obj(tx, args.self), pure(tx, args.addr, `address`) ], }) }

export function attributes( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::attributes`, arguments: [ obj(tx, self) ], }) }

export function edition( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::edition`, arguments: [ obj(tx, self) ], }) }

export function imageUrl( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::image_url`, arguments: [ obj(tx, self) ], }) }

export function upgrades( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::upgrades`, arguments: [ obj(tx, self) ], }) }

export interface AssertHasAvatarArgs { self: TransactionObjectInput; addr: string | TransactionArgument }

export function assertHasAvatar( tx: Transaction, args: AssertHasAvatarArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::assert_has_avatar`, arguments: [ obj(tx, args.self), pure(tx, args.addr, `address`) ], }) }

export function avatarImage( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::avatar_image`, arguments: [ obj(tx, self) ], }) }

export function avatarModel( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::avatar_model`, arguments: [ obj(tx, self) ], }) }

export function avatarTexture( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::avatar_texture`, arguments: [ obj(tx, self) ], }) }

export interface EquipCosmeticArgs { self: TransactionObjectInput; cosmeticId: string | TransactionArgument; cosmeticType: string | TransactionArgument; kiosk: TransactionObjectInput; cap: TransactionObjectInput; policy: TransactionObjectInput; newImage: string | TransactionArgument }

export function equipCosmetic( tx: Transaction, args: EquipCosmeticArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::equip_cosmetic`, arguments: [ obj(tx, args.self), pure(tx, args.cosmeticId, `${ID.$typeName}`), pure(tx, args.cosmeticType, `${String.$typeName}`), obj(tx, args.kiosk), obj(tx, args.cap), obj(tx, args.policy), pure(tx, args.newImage, `${String.$typeName}`) ], }) }

export interface EquipMintedCosmeticArgs { self: TransactionObjectInput; cosmetic: TransactionObjectInput }

export function equipMintedCosmetic( tx: Transaction, args: EquipMintedCosmeticArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::equip_minted_cosmetic`, arguments: [ obj(tx, args.self), obj(tx, args.cosmetic) ], }) }

export interface EquipMintedWeaponArgs { self: TransactionObjectInput; weapon: TransactionObjectInput }

export function equipMintedWeapon( tx: Transaction, args: EquipMintedWeaponArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::equip_minted_weapon`, arguments: [ obj(tx, args.self), obj(tx, args.weapon) ], }) }

export interface EquipWeaponArgs { self: TransactionObjectInput; weaponId: string | TransactionArgument; weaponSlot: string | TransactionArgument; kiosk: TransactionObjectInput; cap: TransactionObjectInput; policy: TransactionObjectInput; newImage: string | TransactionArgument }

export function equipWeapon( tx: Transaction, args: EquipWeaponArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::equip_weapon`, arguments: [ obj(tx, args.self), pure(tx, args.weaponId, `${ID.$typeName}`), pure(tx, args.weaponSlot, `${String.$typeName}`), obj(tx, args.kiosk), obj(tx, args.cap), obj(tx, args.policy), pure(tx, args.newImage, `${String.$typeName}`) ], }) }

export interface HasCosmeticArgs { self: TransactionObjectInput; type: string | TransactionArgument }

export function hasCosmetic( tx: Transaction, args: HasCosmeticArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::has_cosmetic`, arguments: [ obj(tx, args.self), pure(tx, args.type, `${String.$typeName}`) ], }) }

export interface HasWeaponArgs { self: TransactionObjectInput; slot: string | TransactionArgument }

export function hasWeapon( tx: Transaction, args: HasWeaponArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::has_weapon`, arguments: [ obj(tx, args.self), pure(tx, args.slot, `${String.$typeName}`) ], }) }

export interface SetEditionArgs { self: TransactionObjectInput; edition: Array<number | TransactionArgument> | TransactionArgument }

export function setEdition( tx: Transaction, args: SetEditionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::set_edition`, arguments: [ obj(tx, args.self), pure(tx, args.edition, `vector<u8>`) ], }) }

export interface UnequipCosmeticArgs { self: TransactionObjectInput; cosmeticType: string | TransactionArgument; kiosk: TransactionObjectInput; cap: TransactionObjectInput; policy: TransactionObjectInput; newImage: string | TransactionArgument }

export function unequipCosmetic( tx: Transaction, args: UnequipCosmeticArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::unequip_cosmetic`, arguments: [ obj(tx, args.self), pure(tx, args.cosmeticType, `${String.$typeName}`), obj(tx, args.kiosk), obj(tx, args.cap), obj(tx, args.policy), pure(tx, args.newImage, `${String.$typeName}`) ], }) }

export interface UnequipWeaponArgs { self: TransactionObjectInput; weaponSlot: string | TransactionArgument; kiosk: TransactionObjectInput; cap: TransactionObjectInput; policy: TransactionObjectInput; newImage: string | TransactionArgument }

export function unequipWeapon( tx: Transaction, args: UnequipWeaponArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::unequip_weapon`, arguments: [ obj(tx, args.self), pure(tx, args.weaponSlot, `${String.$typeName}`), obj(tx, args.kiosk), obj(tx, args.cap), obj(tx, args.policy), pure(tx, args.newImage, `${String.$typeName}`) ], }) }

export interface UpgradeEquippedCosmeticArgs { self: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput; type: string | TransactionArgument; url: string | TransactionArgument }

export function upgradeEquippedCosmetic( tx: Transaction, args: UpgradeEquippedCosmeticArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::upgrade_equipped_cosmetic`, arguments: [ obj(tx, args.self), obj(tx, args.accessControl), obj(tx, args.admin), pure(tx, args.type, `${String.$typeName}`), pure(tx, args.url, `${String.$typeName}`) ], }) }

export interface UpgradeEquippedWeaponArgs { self: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput; slot: string | TransactionArgument; url: string | TransactionArgument }

export function upgradeEquippedWeapon( tx: Transaction, args: UpgradeEquippedWeaponArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::avatar::upgrade_equipped_weapon`, arguments: [ obj(tx, args.self), obj(tx, args.accessControl), obj(tx, args.admin), pure(tx, args.slot, `${String.$typeName}`), pure(tx, args.url, `${String.$typeName}`) ], }) }

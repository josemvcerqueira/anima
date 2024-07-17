import {PUBLISHED_AT} from "..";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function name( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::name`, arguments: [ obj(tx, self) ], }) }

export function init( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::init`, arguments: [ ], }) }

export function colourWay( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::colour_way`, arguments: [ obj(tx, self) ], }) }

export function manufacturer( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::manufacturer`, arguments: [ obj(tx, self) ], }) }

export function rarity( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::rarity`, arguments: [ obj(tx, self) ], }) }

export interface AddAccessoryArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addAccessory( tx: Transaction, args: AddAccessoryArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_accessory`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AddBootsArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addBoots( tx: Transaction, args: AddBootsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_boots`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AddChestpieceArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addChestpiece( tx: Transaction, args: AddChestpieceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_chestpiece`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AddHelmArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addHelm( tx: Transaction, args: AddHelmArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_helm`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AddLeftArmArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addLeftArm( tx: Transaction, args: AddLeftArmArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_left_arm`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AddLeftBracerArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addLeftBracer( tx: Transaction, args: AddLeftBracerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_left_bracer`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AddLeftGloveArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addLeftGlove( tx: Transaction, args: AddLeftGloveArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_left_glove`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AddLeftPauldronArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addLeftPauldron( tx: Transaction, args: AddLeftPauldronArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_left_pauldron`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AddLegsArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addLegs( tx: Transaction, args: AddLegsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_legs`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AddPrimaryArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addPrimary( tx: Transaction, args: AddPrimaryArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_primary`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AddRightArmArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addRightArm( tx: Transaction, args: AddRightArmArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_right_arm`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AddRightBracerArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addRightBracer( tx: Transaction, args: AddRightBracerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_right_bracer`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AddRightGloveArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addRightGlove( tx: Transaction, args: AddRightGloveArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_right_glove`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AddRightPauldronArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addRightPauldron( tx: Transaction, args: AddRightPauldronArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_right_pauldron`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AddSecondaryArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addSecondary( tx: Transaction, args: AddSecondaryArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_secondary`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AddShinsArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addShins( tx: Transaction, args: AddShinsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_shins`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AddTertiaryArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addTertiary( tx: Transaction, args: AddTertiaryArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_tertiary`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface AddUpperTorsoArgs { genesisShop: TransactionObjectInput; accessControl: TransactionObjectInput; admin: TransactionObjectInput }

export function addUpperTorso( tx: Transaction, args: AddUpperTorsoArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::add_upper_torso`, arguments: [ obj(tx, args.genesisShop), obj(tx, args.accessControl), obj(tx, args.admin) ], }) }

export interface BorrowItemMutArgs { self: TransactionObjectInput; name: string | TransactionArgument }

export function borrowItemMut( tx: Transaction, args: BorrowItemMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::borrow_item_mut`, arguments: [ obj(tx, args.self), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface BuildArgs { isCosmetic: boolean | TransactionArgument; names: Array<Array<number | TransactionArgument> | TransactionArgument> | TransactionArgument; kinds: Array<string | TransactionArgument> | TransactionArgument; colourWays: Array<Array<number | TransactionArgument> | TransactionArgument> | TransactionArgument; manufacturers: Array<Array<number | TransactionArgument> | TransactionArgument> | TransactionArgument; rarities: Array<Array<Array<number | TransactionArgument> | TransactionArgument> | TransactionArgument> | TransactionArgument; chances: Array<Array<bigint | TransactionArgument> | TransactionArgument> | TransactionArgument; precision: bigint | TransactionArgument }

export function build( tx: Transaction, args: BuildArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::build`, arguments: [ pure(tx, args.isCosmetic, `bool`), pure(tx, args.names, `vector<vector<u8>>`), pure(tx, args.kinds, `vector<${String.$typeName}>`), pure(tx, args.colourWays, `vector<vector<u8>>`), pure(tx, args.manufacturers, `vector<vector<u8>>`), pure(tx, args.rarities, `vector<vector<vector<u8>>>`), pure(tx, args.chances, `vector<vector<u64>>`), pure(tx, args.precision, `u64`) ], }) }

export function kinds( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::kinds`, arguments: [ obj(tx, self) ], }) }

export interface BuildSecondaryArgs { names: Array<Array<number | TransactionArgument> | TransactionArgument> | TransactionArgument; kinds: Array<string | TransactionArgument> | TransactionArgument; colourWays: Array<Array<Array<number | TransactionArgument> | TransactionArgument> | TransactionArgument> | TransactionArgument; manufacturers: Array<Array<number | TransactionArgument> | TransactionArgument> | TransactionArgument; rarities: Array<Array<Array<number | TransactionArgument> | TransactionArgument> | TransactionArgument> | TransactionArgument; chances: Array<Array<bigint | TransactionArgument> | TransactionArgument> | TransactionArgument; precision: bigint | TransactionArgument }

export function buildSecondary( tx: Transaction, args: BuildSecondaryArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::build_secondary`, arguments: [ pure(tx, args.names, `vector<vector<u8>>`), pure(tx, args.kinds, `vector<${String.$typeName}>`), pure(tx, args.colourWays, `vector<vector<vector<u8>>>`), pure(tx, args.manufacturers, `vector<vector<u8>>`), pure(tx, args.rarities, `vector<vector<vector<u8>>>`), pure(tx, args.chances, `vector<vector<u64>>`), pure(tx, args.precision, `u64`) ], }) }

export interface BuildTertiaryArgs { names: Array<Array<number | TransactionArgument> | TransactionArgument> | TransactionArgument; kinds: Array<string | TransactionArgument> | TransactionArgument; colourWays: Array<Array<number | TransactionArgument> | TransactionArgument> | TransactionArgument; manufacturers: Array<Array<number | TransactionArgument> | TransactionArgument> | TransactionArgument; rarities: Array<Array<number | TransactionArgument> | TransactionArgument> | TransactionArgument; chances: Array<bigint | TransactionArgument> | TransactionArgument; precision: bigint | TransactionArgument }

export function buildTertiary( tx: Transaction, args: BuildTertiaryArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::build_tertiary`, arguments: [ pure(tx, args.names, `vector<vector<u8>>`), pure(tx, args.kinds, `vector<${String.$typeName}>`), pure(tx, args.colourWays, `vector<vector<u8>>`), pure(tx, args.manufacturers, `vector<vector<u8>>`), pure(tx, args.rarities, `vector<vector<u8>>`), pure(tx, args.chances, `vector<u64>`), pure(tx, args.precision, `u64`) ], }) }

export function isSet( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::is_set`, arguments: [ obj(tx, self) ], }) }

export function makeCosmeticRarities( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::make_cosmetic_rarities`, arguments: [ ], }) }

export function makePrimaryRarities( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::make_primary_rarities`, arguments: [ ], }) }

export function unpack( tx: Transaction, item: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::act_genesis_shop::unpack`, arguments: [ obj(tx, item) ], }) }

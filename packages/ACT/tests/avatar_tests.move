#[test_only]
module act::avatar_tests {

    use sui::{
        display::Display,
        test_utils::{assert_eq, destroy},
        kiosk::{Self, Kiosk, KioskOwnerCap},
        test_scenario::{Self as ts, Scenario},
        transfer_policy::{TransferPolicy, TransferPolicyCap},
    };
    use animalib::access_control::{Admin, AccessControl};
    use act::{
        weapon::{Self, Weapon},
        cosmetic::{Self, Cosmetic}, 
        set_up_tests::set_up_admins,
        avatar::{Self, Avatar, AvatarRegistry},
    };

    const OWNER: address = @0xBABE;
    const WEAPON_SLOT: vector<u8> = b"Dual Wield Sword";
    const COSMETIC_TYPE: vector<u8> = b"Head";

    public struct World {
        scenario: Scenario,
        admin: Admin,
        super_admin: Admin,
        kiosk: Kiosk,
        avatar_registry: AvatarRegistry,
        kiosk_cap: KioskOwnerCap,
        access_control: AccessControl,
        avatar_display: Display<Avatar>,
        weapon_equip_transfer_policy: TransferPolicy<Weapon>,
        weapon_trade_transfer_policy: TransferPolicy<Weapon>,
        weapon_equip_transfer_policy_cap: TransferPolicyCap<Weapon>,
        weapon_trade_transfer_policy_cap: TransferPolicyCap<Weapon>,
        weapon_display: Display<Weapon>,
        cosmetic_equip_transfer_policy: TransferPolicy<Cosmetic>,
        cosmetic_trade_transfer_policy: TransferPolicy<Cosmetic>,
        cosmetic_equip_transfer_policy_cap: TransferPolicyCap<Cosmetic>,
        cosmetic_trade_transfer_policy_cap: TransferPolicyCap<Cosmetic>,
        cosmetic_display: Display<Cosmetic>,
    }

    #[test]
    fun test_initiates_correctly() {
        let world = start_world();

        assert_eq(world.avatar_display.fields().size(), 5);
        assert_eq(*world.avatar_display.fields().get(&b"name".to_string()), b"ACT Avatar: {alias}".to_string());
        assert_eq(*world.avatar_display.fields().get(&b"description".to_string()), b"ACT is a fast-paced, high-skill multiplayer FPS".to_string());
        assert_eq(*world.avatar_display.fields().get(&b"image_url".to_string()), b"ipfs://{image_url}".to_string());
        assert_eq(*world.avatar_display.fields().get(&b"project_url".to_string()), b"https://animalabs.io".to_string());
        assert_eq(*world.avatar_display.fields().get(&b"creator".to_string()), b"Anima Labs".to_string());

        world.end();
    }

    #[test]
    fun test_new() {
        let mut world = start_world();

        world.avatar_registry.assert_no_avatar(OWNER);

        let avatar = new_avatar(&mut world.avatar_registry, world.scenario.ctx());

        world.avatar_registry.assert_has_avatar(OWNER);

        assert_eq(avatar.image_url(), b"avatar_image.png".to_string());
        assert_eq(avatar.image_hash(), b"avatar_image_hash".to_string());
        assert_eq(avatar.model_url(), b"avatar_model".to_string());
        assert_eq(avatar.avatar_url(), b"avatar_url".to_string());
        assert_eq(avatar.avatar_hash(), b"avatar_hash".to_string());
        assert_eq(avatar.edition(), b"avatar_edition".to_string());

        avatar.keep(world.scenario.ctx());
        world.end();
    }

    #[test]
    fun test_equip_weapon() {
        let mut world = start_world();

        let mut avatar = new_avatar(&mut world.avatar_registry, world.scenario.ctx());
        let weapon = new_weapon(world.scenario.ctx());

        assert_eq(avatar.has_weapon(WEAPON_SLOT.to_string()), false);

        avatar.equip_minted_weapon(weapon);

        assert_eq(avatar.has_weapon(WEAPON_SLOT.to_string()), true);

        avatar.keep(world.scenario.ctx());
        world.end();
    }

    #[test]
    fun test_equip_cosmetic() {
        let mut world = start_world();

        let mut avatar = new_avatar(&mut world.avatar_registry, world.scenario.ctx());
        let cosmetic = new_cosmetic(world.scenario.ctx());

        assert_eq(avatar.has_cosmetic(COSMETIC_TYPE.to_string()), false);

        avatar.equip_minted_cosmetic(cosmetic);

        assert_eq(avatar.has_cosmetic(COSMETIC_TYPE.to_string()), true);

        avatar.keep(world.scenario.ctx());
        world.end();
    }

    #[test]
    fun test_unequip_weapon() {
        let mut world = start_world();

        let mut avatar = new_avatar(&mut world.avatar_registry, world.scenario.ctx());
        let weapon = new_weapon(world.scenario.ctx());
        let weapon_id = object::id(&weapon);

        let kiosk_cap = &world.kiosk_cap;
        let policy = &world.weapon_trade_transfer_policy;

        avatar.equip_minted_weapon(weapon);

        assert_eq(world.kiosk.has_item(weapon_id), false);
        assert_eq(avatar.has_weapon(WEAPON_SLOT.to_string()), true);

        avatar.unequip_weapon(
            WEAPON_SLOT.to_string(), 
            &mut world.kiosk, 
            kiosk_cap, 
            policy
        );

        assert_eq(world.kiosk.has_item(weapon_id), true);
        assert_eq(avatar.has_weapon(WEAPON_SLOT.to_string()), false);

        avatar.keep(world.scenario.ctx());
        world.end();
    }

    #[test]
    fun test_unequip_cosmetic() {
        let mut world = start_world();

        let mut avatar = new_avatar(&mut world.avatar_registry, world.scenario.ctx());
        let cosmetic = new_cosmetic(world.scenario.ctx());
        let cosmetic_id = object::id(&cosmetic);

        let kiosk_cap = &world.kiosk_cap;
        let policy = &world.cosmetic_trade_transfer_policy;

        assert_eq(world.kiosk.has_item(cosmetic_id), false);

        avatar.equip_minted_cosmetic(cosmetic);

        assert_eq(avatar.has_cosmetic(COSMETIC_TYPE.to_string()), true);

        avatar.unequip_cosmetic(
            COSMETIC_TYPE.to_string(), 
            &mut world.kiosk, 
            kiosk_cap, 
            policy
        );
        
        assert_eq(avatar.has_cosmetic(COSMETIC_TYPE.to_string()), false);
        assert_eq(world.kiosk.has_item(cosmetic_id), true);

        avatar.keep(world.scenario.ctx());
        world.end();
    }  

    fun start_world(): World {
        let mut scenario = ts::begin(OWNER);

        avatar::init_for_testing(scenario.ctx());
        weapon::init_for_testing(scenario.ctx());
        cosmetic::init_for_testing(scenario.ctx());

        scenario.next_tx(OWNER);

        let (access_control, super_admin, admin) = set_up_admins(&mut scenario);

        let (kiosk, kiosk_cap) = kiosk::new(scenario.ctx());

        let weapon_display = scenario.take_from_sender<Display<Weapon>>();
        let weapon_equip_transfer_policy_cap = scenario.take_from_sender<TransferPolicyCap<Weapon>>();
        let weapon_trade_transfer_policy_cap = scenario.take_from_sender<TransferPolicyCap<Weapon>>();
        let weapon_equip_transfer_policy = scenario.take_shared<TransferPolicy<Weapon>>();
        let weapon_trade_transfer_policy = scenario.take_shared<TransferPolicy<Weapon>>();
        
        let cosmetic_display = scenario.take_from_sender<Display<Cosmetic>>();
        let cosmetic_equip_transfer_policy_cap = scenario.take_from_sender<TransferPolicyCap<Cosmetic>>();
        let cosmetic_trade_transfer_policy_cap = scenario.take_from_sender<TransferPolicyCap<Cosmetic>>();
        let cosmetic_equip_transfer_policy = scenario.take_shared<TransferPolicy<Cosmetic>>();
        let cosmetic_trade_transfer_policy = scenario.take_shared<TransferPolicy<Cosmetic>>();

        scenario.next_tx(OWNER);

        let avatar_display = scenario.take_from_sender<Display<Avatar>>();
        let avatar_registry = scenario.take_shared<AvatarRegistry>();

        World {
            scenario,
            avatar_registry,
            avatar_display,
            weapon_display,
            cosmetic_display,
            kiosk,
            kiosk_cap,
            weapon_trade_transfer_policy_cap,
            weapon_equip_transfer_policy_cap,
            weapon_trade_transfer_policy,
            weapon_equip_transfer_policy,
            cosmetic_trade_transfer_policy_cap,
            cosmetic_equip_transfer_policy_cap,
            cosmetic_trade_transfer_policy,
            cosmetic_equip_transfer_policy,
            access_control,
            super_admin,
            admin
        }
    }

    fun new_avatar(registry: &mut AvatarRegistry, ctx: &mut TxContext): Avatar {
        avatar::new(
            registry,
            b"avatar_image.png".to_string(),
            b"avatar_image_hash".to_string(),
            b"avatar_model".to_string(),
            b"avatar_url".to_string(),
            b"avatar_hash".to_string(),
            b"avatar_edition".to_string(),
            ctx
        )
    }

    fun new_weapon(ctx: &mut TxContext): Weapon {
        weapon::new(
            b"warglaive of azzinoth".to_string(),
            b"https://conquestcapped.com/image/cache/catalog/wow/transmogs/legendary-items/warglaives-of-azzinoth-630x400.png".to_string(),
            b"image_hash".to_string(),
            b"dual wield sword".to_string(),
            WEAPON_SLOT.to_string(),
            b"green".to_string(),
            b"soulbound".to_string(),
            b"Illidan Stormrage".to_string(),
            b"legendary".to_string(),
            b"hash".to_string(),
            100,
            ctx
        )
    }

    fun new_cosmetic(ctx: &mut TxContext): Cosmetic {
        cosmetic::new(
            b"cursed vision of sargeras".to_string(),
            b"https://wow.zamimg.com/uploads/screenshots/normal/446667-cursed-vision-of-sargeras.jpg".to_string(),
            b"image_hash".to_string(),
            b"head".to_string(),
            COSMETIC_TYPE.to_string(),
            b"red".to_string(),
            b"soulbound".to_string(),
            b"Illidan Stormrage".to_string(),
            b"epic".to_string(),
            b"hash".to_string(),
            95,
            ctx
        )
    }

    fun end(world: World) {
        destroy(world);
    }
}
import type { ImageMetadata } from 'astro';

// -- recovered originals / GBP, 822-2322px ------------------------------------
import gbp01 from '../assets/large/gbp-01-stone-entry.jpg';
import gbp04 from '../assets/large/gbp-04-pergola-patio.jpg';
import gbp05 from '../assets/large/gbp-05-brick-wall-railing.jpg';
import gbp06tex from '../assets/large/gbp-06-paving-texture.jpg';

// -- Yelp finished work, 1000px long side -------------------------------------
import y03 from '../assets/yelp-finished/yelp-03.jpg';
import y04 from '../assets/yelp-finished/yelp-04.jpg';
import y05 from '../assets/yelp-finished/yelp-05.jpg';
import y13 from '../assets/yelp-finished/yelp-13.jpg';
import y14 from '../assets/yelp-finished/yelp-14.jpg';
import y15 from '../assets/yelp-finished/yelp-15.jpg';
import y16 from '../assets/yelp-finished/yelp-16.jpg';
import y17 from '../assets/yelp-finished/yelp-17.jpg';
import y18 from '../assets/yelp-finished/yelp-18.jpg';
import y19 from '../assets/yelp-finished/yelp-19.jpg';
import y20 from '../assets/yelp-finished/yelp-20.jpg';
import y23 from '../assets/yelp-finished/yelp-23.jpg';
import y25 from '../assets/yelp-finished/yelp-25.jpg';
import y26 from '../assets/yelp-finished/yelp-26.jpg';
import y27 from '../assets/yelp-finished/yelp-27.jpg';
import y28 from '../assets/yelp-finished/yelp-28.jpg';
import y29 from '../assets/yelp-finished/yelp-29.jpg';
import y30 from '../assets/yelp-finished/yelp-30.jpg';

// -- before / in-progress -----------------------------------------------------
import b01 from '../assets/yelp-before/yelp-01.jpg';
import b02 from '../assets/yelp-before/yelp-02.jpg';
import b06 from '../assets/yelp-before/yelp-06.jpg';
import b07 from '../assets/yelp-before/yelp-07.jpg';
import b09 from '../assets/yelp-before/yelp-09.jpg';
import b10 from '../assets/yelp-before/yelp-10.jpg';
import b11 from '../assets/yelp-before/yelp-11.jpg';
import b12 from '../assets/yelp-before/yelp-12.jpg';
import b21 from '../assets/yelp-before/yelp-21.jpg';
import b22 from '../assets/yelp-before/yelp-22.jpg';
import b24 from '../assets/yelp-before/yelp-24.jpg';

// -- old-site salvage at 678px; superseded as the originals are reinstated -----
import s01 from '../assets/site-photos/01-Dos-Vientos-Property-Retaining-Wall-and-Driveway.jpg';
import s02 from '../assets/site-photos/02-CPF-Backstop.jpg';
import s03 from '../assets/site-photos/03-cpf-viewpoint-school-5.jpg';
import s04 from '../assets/site-photos/04-cpf-custom-concrete-5.jpg';
import s05 from '../assets/site-photos/05-Dos-Vientos-Property-Line-Retaining-Wall.jpg';
import s06 from '../assets/site-photos/06-cpf-viewpoint-school-10.jpg';
import s07 from '../assets/site-photos/07-CPF-Beautiful-Stamped-Concrete-Driveway.jpg';
import s08 from '../assets/site-photos/08-cpf-viewpoint-school-7.jpg';
import s09 from '../assets/site-photos/09-outdoor-kitchen-fireplace-7.jpg';
import s10 from '../assets/site-photos/10-outdoor-kitchen-fireplace-6.jpg';
import s11 from '../assets/site-photos/11-cpf-custom-concrete-driveway-4.jpg';
import s12 from '../assets/site-photos/12-cpf-custom-concrete-driveway-1.jpg';
import s13 from '../assets/site-photos/13-CPF-Shed.jpg';
import s14 from '../assets/site-photos/14-outdoor-kitchen-fireplace-8.jpg';
import s15 from '../assets/site-photos/15-CPF-Outfield-Wall.jpg';
import s16 from '../assets/site-photos/16-outdoor-kitchen-fireplace-3.jpg';
import s17 from '../assets/site-photos/17-CPF-Dugout-Front.jpg';
import s18 from '../assets/site-photos/18-CPF-Dugout-Footer.jpg';
import s19 from '../assets/site-photos/19-CPF-Dugout-Back.jpg';
import sCounter from '../assets/site-photos/extra-IMG_0763.jpg';
import sVilla from '../assets/site-photos/extra-cpf-stone-work-villa.jpg';
import sSlab from '../assets/site-photos/extra-slider-cpf-concrete-counter.jpg';



// -- recovered originals from cpfmasonry.com, 822-1920px ----------------------
// Reinstated 2026-09-15 from the live site's media library. Alt text is the
// owner's own wherever the old page markup carried it; the Dos Vientos and
// excavation sets had none worth keeping and are described from the photographs.
import r_beautifulStampedConcreteDriveway from '../assets/recovered/beautiful-stamped-concrete-driveway.jpg';
import r_stampedConcreteWalkwayProgressShot from '../assets/recovered/stamped-concrete-walkway-progress-shot.jpg';
import r_stampedConcreteProgressShot from '../assets/recovered/stamped-concrete-progress-shot.jpg';
import r_paverDrivewayWithCustomConcreteWaterFeature from '../assets/recovered/paver-driveway-with-custom-concrete-water-feature.jpg';
import r_paverDrivewayWithCustomConcretePillars from '../assets/recovered/paver-driveway-with-custom-concrete-pillars.jpg';
import r_concreteDrivewayWithStoneRetainingWalls from '../assets/recovered/concrete-driveway-with-stone-retaining-walls.jpg';
import r_stampedConcreteDrivewayAndSidewalkFeatures from '../assets/recovered/stamped-concrete-driveway-and-sidewalk-features.jpg';
import r_stampedConcreteDrivewayWithStoneRetainingWall from '../assets/recovered/stamped-concrete-driveway-with-stone-retaining-wall.jpg';
import r_stampedConcreteDrivewayAndRetainingWall from '../assets/recovered/stamped-concrete-driveway-and-retaining-wall.jpg';
import r_cpfPaverDriveway from '../assets/recovered/cpf-paver-driveway.jpg';
import r_customCommercialSignAtOaksMall from '../assets/recovered/custom-commercial-sign-at-oaks-mall.jpg';
import r_concreteCommercialSignAtMonteVistaChurch from '../assets/recovered/concrete-commercial-sign-at-monte-vista-church.jpg';
import r_newburyParkMonteVistaConcreteSign from '../assets/recovered/newbury-park-monte-vista-concrete-sign.jpg';
import r_oaksMallCustomConcreteSign from '../assets/recovered/oaks-mall-custom-concrete-sign.jpg';
import r_concreteAndStoneworkPoolProgressShot from '../assets/recovered/concrete-and-stonework-pool-progress-shot.jpg';
import r_blackConcreteCountertops from '../assets/recovered/black-concrete-countertops.jpg';
import r_blackConcreteCountertopsWithBarbecue from '../assets/recovered/black-concrete-countertops-with-barbecue.jpg';
import r_kitchenConcreteCountertopsReadyForSinkInstall from '../assets/recovered/kitchen-concrete-countertops-ready-for-sink-install.jpg';
import r_concreteCountertopCloseup from '../assets/recovered/concrete-countertop-closeup.jpg';
import r_outdoorConcreteCountertopProgressShot2 from '../assets/recovered/outdoor-concrete-countertop-progress-shot-2.jpg';
import r_outdoorConcreteCountertopProgressShot from '../assets/recovered/outdoor-concrete-countertop-progress-shot.jpg';
import r_backyardCustomConcreteCountertopBarbecueSetup from '../assets/recovered/backyard-custom-concrete-countertop-barbecue-setup.jpg';
import r_backyardConcreteCountertopFireFeature from '../assets/recovered/backyard-concrete-countertop-fire-feature.jpg';
import r_closeupOutdoorConcreteCountertop from '../assets/recovered/closeup-outdoor-concrete-countertop.jpg';
import r_concreteKitchenCounterCloseup from '../assets/recovered/concrete-kitchen-counter-closeup.jpg';
import r_backyardConcreteCountertopFireFeature2 from '../assets/recovered/backyard-concrete-countertop-fire-feature-2.jpg';
import r_polishedStoneCountertops from '../assets/recovered/polished-stone-countertops.jpg';
import r_cpfStoneMailbox from '../assets/recovered/cpf-stone-mailbox.jpg';
import r_gardenWallStoneVeneerAndPorchClose from '../assets/recovered/garden-wall-stone-veneer-and-porch-close.jpg';
import r_paversAndStoneVeneer from '../assets/recovered/pavers-and-stone-veneer.jpg';
import r_customStoneWallLinedDriveway from '../assets/recovered/custom-stone-wall-lined-driveway.jpg';
import r_cpfCustomDrivewayAndStoneWalls from '../assets/recovered/cpf-custom-driveway-and-stone-walls.jpg';
import r_stoneWalkwayWaterFeatureVeneerAndMore from '../assets/recovered/stone-walkway-water-feature-veneer-and-more.jpg';
import r_customStoneworkVeneerAndGardenWall from '../assets/recovered/custom-stonework-veneer-and-garden-wall.jpg';
import r_stoneDrivewayWall from '../assets/recovered/stone-driveway-wall.jpg';
import r_porchWithPaversAndStoneVeneer from '../assets/recovered/porch-with-pavers-and-stone-veneer.jpg';
import r_stoneRetainingWallAndStampedConcreteDriveway from '../assets/recovered/stone-retaining-wall-and-stamped-concrete-driveway.jpg';
import r_customConcreteDrivewayWithStoneSidewalkFeatures from '../assets/recovered/custom-concrete-driveway-with-stone-sidewalk-features.jpg';
import r_stoneRetainingWallAndCustomConcreteDriveway from '../assets/recovered/stone-retaining-wall-and-custom-concrete-driveway.jpg';
import r_sidewalkFeaturesWithStampedConcreteAndStone from '../assets/recovered/sidewalk-features-with-stamped-concrete-and-stone.jpg';
import r_sidewalkFeaturesWithStampedConcreteAndStone2 from '../assets/recovered/sidewalk-features-with-stamped-concrete-and-stone-2.jpg';
import r_retainingWallWithCreativeStoneFeatures from '../assets/recovered/retaining-wall-with-creative-stone-features.jpg';
import r_closeUpWallWithCreativeStoneFeatures from '../assets/recovered/close-up-wall-with-creative-stone-features.jpg';
import r_customStoneWallsAndVeneerFeatures from '../assets/recovered/custom-stone-walls-and-veneer-features.jpg';
import r_stampedConcreteDrivewayAndCustomStoneRetaining from '../assets/recovered/stamped-concrete-driveway-and-custom-stone-retaining.jpg';
import r_kubotaTrackLoaderOnSite from '../assets/recovered/kubota-track-loader-on-site.jpg';
import r_excavatorAndLoaderStrippingFrontYard from '../assets/recovered/excavator-and-loader-stripping-front-yard.jpg';
import r_trackLoaderCarryingSpoilFromTrench from '../assets/recovered/track-loader-carrying-spoil-from-trench.jpg';
import r_loaderMovingExcavatedSoilKerbside from '../assets/recovered/loader-moving-excavated-soil-kerbside.jpg';
import r_brokenConcreteStackedForRemoval from '../assets/recovered/broken-concrete-stacked-for-removal.jpg';
import r_gradedSubgradeReadyForNewPour from '../assets/recovered/graded-subgrade-ready-for-new-pour.jpg';
import r_excavatedCutForRetainingWallFooting from '../assets/recovered/excavated-cut-for-retaining-wall-footing.jpg';
import r_skidSteerWorkingNarrowSideYard from '../assets/recovered/skid-steer-working-narrow-side-yard.jpg';
import r_concreteStockpiledDuringDrivewayDemolition from '../assets/recovered/concrete-stockpiled-during-driveway-demolition.jpg';
import r_gradedSlopeWithCobbleDrainageCourse from '../assets/recovered/graded-slope-with-cobble-drainage-course.jpg';
import r_excavatorLiftingBrokenConcreteSlabs from '../assets/recovered/excavator-lifting-broken-concrete-slabs.jpg';
import r_barricadedDrivewayDemolitionSpoil from '../assets/recovered/barricaded-driveway-demolition-spoil.jpg';
import r_dosVientosStampedDrivewayStoneWalls from '../assets/recovered/dos-vientos-stamped-driveway-stone-walls.jpg';
import r_dosVientosCoveredPatioStonePillars from '../assets/recovered/dos-vientos-covered-patio-stone-pillars.jpg';
import r_dosVientosPatioFountainSeating from '../assets/recovered/dos-vientos-patio-fountain-seating.jpg';
import r_dosVientosPatioEnclosureAwning from '../assets/recovered/dos-vientos-patio-enclosure-awning.jpg';
import r_dosVientosOutdoorKitchenTiledCounter from '../assets/recovered/dos-vientos-outdoor-kitchen-tiled-counter.jpg';
import r_dosVientosBuiltInPizzaOven from '../assets/recovered/dos-vientos-built-in-pizza-oven.jpg';
import r_dosVientosBarbecueAndRefrigeratedStorage from '../assets/recovered/dos-vientos-barbecue-and-refrigerated-storage.jpg';
import r_dosVientosSerpentineTiledCountertop from '../assets/recovered/dos-vientos-serpentine-tiled-countertop.jpg';
import r_dosVientosOutdoorKitchenCornerView from '../assets/recovered/dos-vientos-outdoor-kitchen-corner-view.jpg';


// -- current work, 2025-2026, 1242-4284px ------------------------------------
// Shot by the owner and handed over 2026-09-15. These are the highest-
// resolution files on the site by a wide margin and the only ones showing
// work from the last two years, so they get the header and hero slots.
// Two carry a bottom crop where a finger caught the lens; nothing is upscaled.
import cBlockRetainingWallBrickCapDriveway from '../assets/current/block-retaining-wall-brick-cap-driveway.jpg';
import cBlockWallBrickCapRaisedPlanter from '../assets/current/block-wall-brick-cap-raised-planter.jpg';
import cBrickEntryWalkwayCurvedPlanterWalls from '../assets/current/brick-entry-walkway-curved-planter-walls.jpg';
import cCurvedStructuralRetainingWallFinishedFace from '../assets/current/curved-structural-retaining-wall-finished-face.jpg';
import cColorChangingFiberOpticConcreteCountertop from '../assets/current/color-changing-fiber-optic-concrete-countertop.jpg';
import cFiberOpticConcreteCountertopLitAtNight from '../assets/current/fiber-optic-concrete-countertop-lit-at-night.jpg';
import cFlagstoneCappedSeatWallDetail from '../assets/current/flagstone-capped-seat-wall-detail.jpg';
import cFlagstonePatioBackyardDiningArea from '../assets/current/flagstone-patio-backyard-dining-area.jpg';
import cFlagstonePatioNaturalStonePaving from '../assets/current/flagstone-patio-natural-stone-paving.jpg';
import cFlagstonePatioStepsAndSeatWall from '../assets/current/flagstone-patio-steps-and-seat-wall.jpg';
import cHillsideBlockRetainingWallConstruction from '../assets/current/hillside-block-retaining-wall-construction.jpg';
import cNaturalStoneStepsStackedStoneRetainingWall from '../assets/current/natural-stone-steps-stacked-stone-retaining-wall.jpg';
import cReinforcedRetainingWallFootingAndDrainage from '../assets/current/reinforced-retaining-wall-footing-and-drainage.jpg';
import cRiverRockFeatureWallBathroomStoneTile from '../assets/current/river-rock-feature-wall-bathroom-stone-tile.jpg';
import cSandstoneStepLandingFlagstonePath from '../assets/current/sandstone-step-landing-flagstone-path.jpg';
import cTallStructuralRetainingWallHillside from '../assets/current/tall-structural-retaining-wall-hillside.jpg';

import logoJpg from '../assets/logo/cpf-logo-1080.jpg';

export interface Asset {
  img: ImageMetadata;
  /**
   * Optional ceiling for a file that is softer than its pixel count suggests.
   * Almost never needed — plan()'s 2x rule is the general case.
   */
  maxDisplay?: number;
  /**
   * Describes the actual work, not the category. Written from the contact
   * sheets in _docs/. This is local SEO copy, not an accessibility checkbox.
   */
  alt: string;
}

const a = (img: ImageMetadata, alt: string, maxDisplay?: number): Asset =>
  ({ img, alt, ...(maxDisplay === undefined ? {} : { maxDisplay }) });

export const LOGO_RASTER = logoJpg;

export const A = {
  // ---- large ---------------------------------------------------------------
  brickWallRailing: a(gbp05,
    'Red brick dugout wall topped with a white perforated steel screen, concrete steps and sidewalk alongside a baseball diamond'),
  pavingTexture: a(gbp06tex,
    'Close-up of red clay brick paving laid in a tight running bond'),
  stoneEntry: a(gbp01,
    'Stone veneer entry columns flanking a walkway with mature foundation planting'),
  pergolaPatio: a(gbp04,
    'Timber pergola over a natural stone patio in a residential backyard'),

  // ---- yelp finished -------------------------------------------------------
  poolWaterFeature: a(y27,
    'Swimming pool with a raised stone water feature, palms and a blue market umbrella'),
  pergolaLounge: a(y28,
    'Natural stone patio under a timber pergola with blue umbrellas and lounge seating'),
  patioSteps: a(y29,
    'Natural stone patio and steps with blue umbrellas beside a raised planter'),
  waterGarden: a(y30,
    'Landscaped water feature edged in stone with aquatic planting'),
  roseWalkway: a(y23,
    'Paver walkway running between beds of flowering roses to a side gate'),
  herringboneClose: a(y13,
    'Red brick paving laid in a herringbone pattern, photographed close'),
  herringboneWet: a(y16,
    'Herringbone brick paving with a damp finish showing the clay color variation'),
  roseFrontage: a(y15,
    'Front of a Conejo Valley home with rose beds, a black metal fence and a paved drive'),
  curvedRoseWalk: a(y17,
    'Curving paver walkway alongside rose beds leading to a side entry'),
  fencedWalkway: a(y18,
    'Paver walkway with a black metal fence and a clipped hedge'),
  entryCourtyard: a(y04,
    'Entry courtyard with a white gate, potted plants and paver flooring'),
  brickWallHouse: a(y05,
    'Red brick garden wall running alongside a tile-roofed house'),
  brickWallTrees: a(y03,
    'Tall red brick garden wall with mature trees behind'),
  driveApron: a(y19,
    'Paved driveway apron and walkway at a residential garage'),
  paverDrive: a(y20,
    'Paver driveway with planted borders in front of a home'),
  potteryEntry: a(y25,
    'Home entry with potted plants set over paver flooring'),
  curvedDrive: a(y26,
    'Curved paver driveway sweeping in front of a residence'),
  stakedTrees: a(y14,
    'Newly planted trees staked beside a finished block wall'),

  // ---- before / during -----------------------------------------------------
  beforeYardDirt: a(b01,
    'Bare graded dirt yard with a freshly poured concrete strip and the hills beyond'),
  beforeYardPoured: a(b02,
    'The same yard with concrete flatwork complete and the ground made up'),
  beforeWallShed: a(b06,
    'Block wall and shed standing on bare graded ground'),
  beforeLongWall: a(b07,
    'Long block wall running the length of a bare dirt yard'),
  beforeFenceDirt: a(b09,
    'Existing wood fence and bare soil before construction began'),
  duringBlockWall: a(b10,
    'Block wall part-built alongside established planting'),
  beforePalmsDirt: a(b11,
    'Bare dirt yard with an old wood fence and palms before work started'),
  duringBrickWall: a(b12,
    'Brick wall part-built with rubble still at its base'),
  duringWallCorner: a(b21,
    'Corner of a block wall under construction'),
  duringWallPlanting: a(b22,
    'Block wall with planting going in alongside'),
  duringPondArea: a(b24,
    'Planting established around a newly formed pond area'),

  // ---- site photos, 678px --------------------------------------------------
  dosVientosDrive: a(s01,
    'Stone-faced retaining wall curving alongside a stamped concrete driveway at a Dos Vientos property in Newbury Park'),
  ymcaBackstop: a(s02,
    'Red brick backstop wall with chain-link fencing behind home plate at the Triunfo YMCA baseball fields'),
  viewpointDiamond: a(s03,
    'Completed baseball diamond with red and green synthetic turf at Robertson Family Field, Viewpoint School in Calabasas'),
  oaksMonument: a(s04,
    'Stone and stucco monument sign reading "The Oaks" set into a landscaped bed'),
  dosVientosWall: a(s05,
    'Stacked stone property-line retaining wall beside a broad concrete driveway at a Dos Vientos home'),
  viewpointOutfield: a(s06,
    'Green synthetic outfield turf and boundary netting at Robertson Family Field, Viewpoint School'),
  stampedDriveway: a(s07,
    'Tan stamped concrete driveway with a scored border running up to a residential garage'),
  viewpointHomePlate: a(s08,
    'Home plate and infield with red warning-track turf at Robertson Family Field, Viewpoint School'),
  stoneFireplaceTall: a(s09,
    'Tall stacked-stone outdoor fireplace with an arched firebox and raised hearth on a backyard patio'),
  poolFireplace: a(s10,
    'Cream cast stone fireplace and chimney standing beside a swimming pool'),
  spanishDrive: a(s11,
    'Concrete driveway and flagstone walkway in front of a Spanish-style Conejo Valley home'),
  fountainPavers: a(s12,
    'Circular tiered fountain set into a paver surround with planted beds'),
  ymcaShed: a(s13,
    'Equipment shed and chain-link enclosure alongside the outfield at the Triunfo YMCA fields'),
  firePitSeating: a(s14,
    'Round stone fire pit with a curved seating wall on a poolside patio'),
  outfieldWall: a(s15,
    'Curved tan segmental block retaining wall running along an outfield boundary'),
  brickFireplaceMantel: a(s16,
    'Stone and brick outdoor fireplace with a timber mantel under a covered patio'),
  dugoutFront: a(s17,
    'Front of the completed dugout with bench seating behind a perforated steel screen'),
  dugoutFooter: a(s18,
    'Poured concrete footing and brick base course of the dugout during construction'),
  dugoutBack: a(s19,
    'Rear elevation of the finished brick dugout with concrete steps and railing'),
  concreteCounter: a(sCounter,
    'Poured concrete outdoor kitchen counter with a stainless steel built-in'),
  stoneVilla: a(sVilla,
    'Covered patio with stone columns and a red awning over outdoor furniture'),
  polishedCounter: a(sSlab,
    'Polished concrete countertop finished to a wet look'),


  // ---- custom-concrete-driveways ----
  beautifulStampedConcreteDriveway: a(r_beautifulStampedConcreteDriveway,
    "Beautiful Stamped Concrete Driveway"),
  stampedConcreteWalkwayProgressShot: a(r_stampedConcreteWalkwayProgressShot,
    "Stamped Concrete Walkway Progress Shot"),
  stampedConcreteProgressShot: a(r_stampedConcreteProgressShot,
    "Stamped Concrete Progress Shot"),
  paverDrivewayWithCustomConcreteWaterFeature: a(r_paverDrivewayWithCustomConcreteWaterFeature,
    "Paver Driveway with Custom Concrete Water Feature"),
  paverDrivewayWithCustomConcretePillars: a(r_paverDrivewayWithCustomConcretePillars,
    "Paver Driveway with Custom Concrete Pillars"),
  concreteDrivewayWithStoneRetainingWalls: a(r_concreteDrivewayWithStoneRetainingWalls,
    "Concrete Driveway with Stone Retaining Walls"),
  stampedConcreteDrivewayAndSidewalkFeatures: a(r_stampedConcreteDrivewayAndSidewalkFeatures,
    "Stamped Concrete Driveway and sidewalk features"),
  stampedConcreteDrivewayWithStoneRetainingWall: a(r_stampedConcreteDrivewayWithStoneRetainingWall,
    "Stamped Concrete Driveway with Stone Retaining Wall"),
  stampedConcreteDrivewayAndRetainingWall: a(r_stampedConcreteDrivewayAndRetainingWall,
    "Stamped Concrete Driveway and Retaining Wall"),
  cpfPaverDriveway: a(r_cpfPaverDriveway,
    "CPF Paver Driveway"),
  customCommercialSignAtOaksMall: a(r_customCommercialSignAtOaksMall,
    "Custom commercial sign at oaks mall"),
  concreteCommercialSignAtMonteVistaChurch: a(r_concreteCommercialSignAtMonteVistaChurch,
    "Concrete Commercial Sign at Monte Vista Church"),
  newburyParkMonteVistaConcreteSign: a(r_newburyParkMonteVistaConcreteSign,
    "Newbury Park Monte Vista Concrete Sign"),
  oaksMallCustomConcreteSign: a(r_oaksMallCustomConcreteSign,
    "Oaks mall custom concrete sign"),
  concreteAndStoneworkPoolProgressShot: a(r_concreteAndStoneworkPoolProgressShot,
    "Concrete and Stonework Pool Progress Shot"),

  // ---- concrete-countertops ----
  blackConcreteCountertops: a(r_blackConcreteCountertops,
    'Black cast concrete countertop with a hand-chiseled rock-face edge, running along a stucco wall'),
  blackConcreteCountertopsWithBarbecue: a(r_blackConcreteCountertopsWithBarbecue,
    'The same black concrete counter carried past a built-in stainless barbecue, block wall and paver patio behind'),
  kitchenConcreteCountertopsReadyForSinkInstall: a(r_kitchenConcreteCountertopsReadyForSinkInstall,
    'Polished concrete countertop cast in place with its sink and appliance openings already formed'),
  concreteCountertopCloseup: a(r_concreteCountertopCloseup,
    'Close on a concrete top polished to a wet look, the aggregate showing through the surface'),
  outdoorConcreteCountertopProgressShot2: a(r_outdoorConcreteCountertopProgressShot2,
    'The same freeform slab from the side, showing the cast edge profile and the polished glass aggregate'),
  outdoorConcreteCountertopProgressShot: a(r_outdoorConcreteCountertopProgressShot,
    'Freeform concrete countertop slab cast with colored glass aggregate, on site before it was set in place'),
  backyardCustomConcreteCountertopBarbecueSetup: a(r_backyardCustomConcreteCountertopBarbecueSetup,
    'L-shaped backyard kitchen counter in acid-stained concrete with an integrated sink, built-in grill and bar seating'),
  backyardConcreteCountertopFireFeature: a(r_backyardConcreteCountertopFireFeature,
    'Backyard concrete counter with a fire trough cast into it and filled with fire glass, raised bar top behind'),
  closeupOutdoorConcreteCountertop: a(r_closeupOutdoorConcreteCountertop,
    'Long outdoor bar counter cast in concrete with exposed aggregate, set on a stacked stone base'),
  concreteKitchenCounterCloseup: a(r_concreteKitchenCounterCloseup,
    'Corner of a concrete kitchen counter in an amber stain, fine aggregate showing in the finish'),
  backyardConcreteCountertopFireFeature2: a(r_backyardConcreteCountertopFireFeature2,
    'Close on the cast fire trough and the counter returns, copper-stained concrete over a tiled base'),
  /*
    NOT a concrete countertop — this is a flagstone bar top on a brick base, and
    it sat in the concrete-countertops showcase under the filename's own title
    until 2026-09-19. Renamed off that name so it cannot drift back there.
    Stonework page if anywhere; the frame has a spray bottle in it.
  */
  flagstoneBarTop: a(r_polishedStoneCountertops,
    'Outdoor bar counter topped with cut flagstone over a red brick base'),

  // ---- stonework ----
  cpfStoneMailbox: a(r_cpfStoneMailbox,
    "CPF Stone Mailbox"),
  gardenWallStoneVeneerAndPorchClose: a(r_gardenWallStoneVeneerAndPorchClose,
    "Garden Wall, Stone Veneer, and Porch close-up"),
  paversAndStoneVeneer: a(r_paversAndStoneVeneer,
    "Pavers and Stone Veneer"),
  customStoneWallLinedDriveway: a(r_customStoneWallLinedDriveway,
    "Custom Stone Wall Lined Driveway"),
  cpfCustomDrivewayAndStoneWalls: a(r_cpfCustomDrivewayAndStoneWalls,
    "CPF Custom Driveway and Stone Walls in Agoura Hills"),
  stoneWalkwayWaterFeatureVeneerAndMore: a(r_stoneWalkwayWaterFeatureVeneerAndMore,
    "Stone walkway, water feature, veneer and more"),
  customStoneworkVeneerAndGardenWall: a(r_customStoneworkVeneerAndGardenWall,
    "Custom Stonework Veneer and Garden Wall"),
  stoneDrivewayWall: a(r_stoneDrivewayWall,
    "Stone Driveway Wall"),
  porchWithPaversAndStoneVeneer: a(r_porchWithPaversAndStoneVeneer,
    "Porch with Pavers and Stone Veneer in Thousand Oaks"),
  stoneRetainingWallAndStampedConcreteDriveway: a(r_stoneRetainingWallAndStampedConcreteDriveway,
    "Stone Retaining wall and Stamped Concrete Driveway in Newbury Park"),
  customConcreteDrivewayWithStoneSidewalkFeatures: a(r_customConcreteDrivewayWithStoneSidewalkFeatures,
    "Custom Concrete Driveway with Stone Sidewalk Features in Newbury Park"),
  stoneRetainingWallAndCustomConcreteDriveway: a(r_stoneRetainingWallAndCustomConcreteDriveway,
    "Stone Retaining Wall and Custom Concrete Driveway in Dos Vientos Newbury Park"),
  sidewalkFeaturesWithStampedConcreteAndStone: a(r_sidewalkFeaturesWithStampedConcreteAndStone,
    "Sidewalk Features with stamped concrete and stone"),
  sidewalkFeaturesWithStampedConcreteAndStone2: a(r_sidewalkFeaturesWithStampedConcreteAndStone2,
    "Sidewalk Features with stamped concrete and stone, plus stone retaining wall."),
  retainingWallWithCreativeStoneFeatures: a(r_retainingWallWithCreativeStoneFeatures,
    "Retaining wall with Creative Stone Features in Dos Vientos Newbury Park"),
  closeUpWallWithCreativeStoneFeatures: a(r_closeUpWallWithCreativeStoneFeatures,
    "Close-up wall with Creative Stone Features in Dos Vientos Newbury Park"),
  customStoneWallsAndVeneerFeatures: a(r_customStoneWallsAndVeneerFeatures,
    "Custom Stone Walls and Veneer Features"),
  stampedConcreteDrivewayAndCustomStoneRetaining: a(r_stampedConcreteDrivewayAndCustomStoneRetaining,
    "Stamped Concrete Driveway and Custom Stone Retaining Wall"),

  // ---- grading-and-excavation ----
  kubotaTrackLoaderOnSite: a(r_kubotaTrackLoaderOnSite,
    "Kubota SVL90-2 compact track loader on site at the start of a grading job"),
  excavatorAndLoaderStrippingFrontYard: a(r_excavatorAndLoaderStrippingFrontYard,
    "Mini excavator and track loader stripping a front yard, traffic cones set out along the street"),
  trackLoaderCarryingSpoilFromTrench: a(r_trackLoaderCarryingSpoilFromTrench,
    "Track loader carrying spoil away from an open trench alongside a clipped hedge"),
  loaderMovingExcavatedSoilKerbside: a(r_loaderMovingExcavatedSoilKerbside,
    "Operator moving a full bucket of excavated soil past a coned-off kerbside work area"),
  brokenConcreteStackedForRemoval: a(r_brokenConcreteStackedForRemoval,
    "Broken-out concrete stacked for removal on a stripped driveway"),
  gradedSubgradeReadyForNewPour: a(r_gradedSubgradeReadyForNewPour,
    "Demolished concrete and graded subgrade in front of a three-car garage, ready for a new pour"),
  excavatedCutForRetainingWallFooting: a(r_excavatedCutForRetainingWallFooting,
    "Excavated cut for a retaining wall footing, seen from the operator seat"),
  skidSteerWorkingNarrowSideYard: a(r_skidSteerWorkingNarrowSideYard,
    "Skid-steer loader and hand tools working a narrow side yard between house and fence"),
  concreteStockpiledDuringDrivewayDemolition: a(r_concreteStockpiledDuringDrivewayDemolition,
    "Broken concrete stockpiled beside the loader during driveway demolition"),
  gradedSlopeWithCobbleDrainageCourse: a(r_gradedSlopeWithCobbleDrainageCourse,
    "Crew hand-finishing a graded slope with a cobble drainage course along its base"),
  excavatorLiftingBrokenConcreteSlabs: a(r_excavatorLiftingBrokenConcreteSlabs,
    "Excavator lifting out broken concrete slabs during a front-yard removal"),
  barricadedDrivewayDemolitionSpoil: a(r_barricadedDrivewayDemolitionSpoil,
    "Barricaded driveway with demolition spoil awaiting haul-off"),

  // ---- dos-vientos-villa ----
  dosVientosStampedDrivewayStoneWalls: a(r_dosVientosStampedDrivewayStoneWalls,
    "Stamped concrete driveway edged with stacked stone retaining walls, rising to a wrought-iron entry gate"),
  dosVientosCoveredPatioStonePillars: a(r_dosVientosCoveredPatioStonePillars,
    "Covered patio on flagstone paving, enclosed by stone pillars under a retractable awning"),
  dosVientosPatioFountainSeating: a(r_dosVientosPatioFountainSeating,
    "Stone pillars framing a tiered fountain, with built-in sectional seating beneath the awning"),
  dosVientosPatioEnclosureAwning: a(r_dosVientosPatioEnclosureAwning,
    "Patio enclosure of stone pillars and retractable awning, opening onto the house through glass doors"),
  dosVientosOutdoorKitchenTiledCounter: a(r_dosVientosOutdoorKitchenTiledCounter,
    "Curved outdoor kitchen with a tiled counter, built-in gas barbecue and stainless sink on a flagstone patio"),
  dosVientosBuiltInPizzaOven: a(r_dosVientosBuiltInPizzaOven,
    "Built-in pizza oven set into the stucco surround of the outdoor kitchen counter"),
  dosVientosBarbecueAndRefrigeratedStorage: a(r_dosVientosBarbecueAndRefrigeratedStorage,
    "Fire Magic gas barbecue and built-in refrigerated storage set into the tiled outdoor kitchen"),
  dosVientosSerpentineTiledCountertop: a(r_dosVientosSerpentineTiledCountertop,
    "Serpentine tiled countertop of the outdoor kitchen seen from above"),
  dosVientosOutdoorKitchenCornerView: a(r_dosVientosOutdoorKitchenCornerView,
    "Outdoor kitchen counter curving back toward the house, with shade umbrellas over the tiled bar top"),

  // ---- current work 2025-2026 ----
  blockRetainingWallBrickCapDriveway: a(cBlockRetainingWallBrickCapDriveway,
    'Block retaining wall with a brick cap turning the corner alongside a paver driveway'),
  blockWallBrickCapRaisedPlanter: a(cBlockWallBrickCapRaisedPlanter,
    'Split-face block garden wall with a red brick cap, holding a raised planter of roses'),
  brickEntryWalkwayCurvedPlanterWalls: a(cBrickEntryWalkwayCurvedPlanterWalls,
    'Brick entry walkway laid in herringbone between curved brick planter walls'),
  curvedStructuralRetainingWallFinishedFace: a(cCurvedStructuralRetainingWallFinishedFace,
    'Curved structural retaining wall with the finished face turned to the slope'),
  flagstoneCappedSeatWallDetail: a(cFlagstoneCappedSeatWallDetail,
    'Seat wall rendered in white and capped with cut flagstone, beside a matching patio'),
  flagstonePatioBackyardDiningArea: a(cFlagstonePatioBackyardDiningArea,
    'Flagstone patio across a back garden with dining furniture and mature planting'),
  flagstonePatioNaturalStonePaving: a(cFlagstonePatioNaturalStonePaving,
    'Irregular flagstone patio laid tight with fine mortar joints, running to a clipped hedge'),
  flagstonePatioStepsAndSeatWall: a(cFlagstonePatioStepsAndSeatWall,
    'Flagstone patio with stepped changes of level and a rendered seat wall'),
  hillsideBlockRetainingWallConstruction: a(cHillsideBlockRetainingWallConstruction,
    'Tall reinforced block retaining wall built into a hillside above a valley view'),
  naturalStoneStepsStackedStoneRetainingWall: a(cNaturalStoneStepsStackedStoneRetainingWall,
    'Sandstone steps rising between curved stacked-stone retaining walls'),
  reinforcedRetainingWallFootingAndDrainage: a(cReinforcedRetainingWallFootingAndDrainage,
    'Reinforced retaining wall under construction, showing the footing, rebar and drainage course'),
  riverRockFeatureWallBathroomStoneTile: a(cRiverRockFeatureWallBathroomStoneTile,
    'River rock feature wall and glass block window behind a freestanding bath, on stone tile'),
  sandstoneStepLandingFlagstonePath: a(cSandstoneStepLandingFlagstonePath,
    'Sandstone landing and flagstone path meeting a stacked-stone wall'),
  tallStructuralRetainingWallHillside: a(cTallStructuralRetainingWallHillside,
    'Structural retaining wall running the length of a hillside cut'),

  /*
    Fibre-optic tops, shot at night on a phone in a room with a lit doorway in
    it. Both crops are the slab only, with the remaining room shaded off — the
    concrete itself is untouched. They are the only photographs on the site of
    the lit work, which the owner rates as the thing that sells the trade.

    Owner-confirmed fiber optic on 2026-09-18, so the copy names it outright.
  */
  fiberOpticConcreteCountertopLitAtNight: a(cFiberOpticConcreteCountertopLitAtNight,
    'Fiber-optic concrete countertop lit at night, hundreds of fiber ends cast into the slab reading as a field of blue and white stars'),
  colorChangingFiberOpticConcreteCountertop: a(cColorChangingFiberOpticConcreteCountertop,
    'Fiber-optic concrete countertop running three colors at once, green, blue and white zones set into the polished slab'),

} as const;

export type AssetKey = keyof typeof A;

import type { ImageMetadata } from 'astro';

// -- recovered originals / GBP, 822-2322px ------------------------------------
import gbp01 from '../assets/recovered/custom-stone-walls-and-veneer-features.jpg';
/**
 * THE SAME PHOTOGRAPH, MACHINE-UPSCALED 1024 -> 1920. Owner-supplied and
 * owner-approved, 2026-09-24, for the homepage hero only.
 *
 * This is a deliberate, eyes-open exception to the "no AI upscaling" rule in
 * HANDOFF.md §4. Read `stoneEntryHero` below before using it anywhere else.
 */
import gbp01up from '../assets/recovered/custom-stone-walls-and-veneer-features-1920w-upscaled.jpg';
import gbp04 from '../assets/recovered/dos-vientos-covered-patio-stone-pillars.jpg';
import gbp05 from '../assets/large/brick-dugout-wall-steel-screen-baseball-field.jpg';
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
import s01 from '../assets/recovered/dos-vientos-stamped-concrete-driveway-stone-retaining-wall.jpg';
import s02 from '../assets/site-photos/02-CPF-Backstop.jpg';
import s03 from '../assets/site-photos/03-cpf-viewpoint-school-5.jpg';
import s04 from '../assets/recovered/oaks-mall-custom-concrete-sign.jpg';
import s05 from '../assets/recovered/dos-vientos-stamped-driveway-stone-walls.jpg';
import s06 from '../assets/site-photos/06-cpf-viewpoint-school-10.jpg';
import s07 from '../assets/recovered/beautiful-stamped-concrete-driveway.jpg';
import s08 from '../assets/site-photos/08-cpf-viewpoint-school-7.jpg';
import s09 from '../assets/site-photos/09-outdoor-kitchen-fireplace-7.jpg';
import s10 from '../assets/site-photos/10-outdoor-kitchen-fireplace-6.jpg';
import s11 from '../assets/recovered/stamped-concrete-driveway-and-sidewalk-features.jpg';
import s12 from '../assets/recovered/paver-driveway-with-custom-concrete-water-feature.jpg';
import s13 from '../assets/site-photos/13-CPF-Shed.jpg';
import s14 from '../assets/site-photos/14-outdoor-kitchen-fireplace-8.jpg';
import s15 from '../assets/site-photos/15-CPF-Outfield-Wall.jpg';
import s16 from '../assets/site-photos/16-outdoor-kitchen-fireplace-3.jpg';
import s17 from '../assets/site-photos/17-CPF-Dugout-Front.jpg';
import s18 from '../assets/site-photos/18-CPF-Dugout-Footer.jpg';
import sCounter from '../assets/site-photos/extra-IMG_0763.jpg';
import sVilla from '../assets/site-photos/extra-cpf-stone-work-villa.jpg';
import sSlab from '../assets/site-photos/extra-slider-cpf-concrete-counter.jpg';



// -- recovered originals from cpfmasonry.com, 822-1920px ----------------------
// Reinstated 2026-09-15 from the live site's media library. Alt text is the
// owner's own wherever the old page markup carried it; the Dos Vientos and
// excavation sets had none worth keeping and are described from the photographs.
import r_stampedConcreteWalkwayProgressShot from '../assets/recovered/stamped-concrete-walkway-progress-shot.jpg';
import r_stampedConcreteProgressShot from '../assets/recovered/stamped-concrete-progress-shot.jpg';
import r_paverDrivewayWithCustomConcretePillars from '../assets/recovered/paver-driveway-with-custom-concrete-pillars.jpg';
import r_concreteDrivewayWithStoneRetainingWalls from '../assets/recovered/concrete-driveway-with-stone-retaining-walls.jpg';
import r_stampedConcreteDrivewayWithStoneRetainingWall from '../assets/recovered/stamped-concrete-driveway-with-stone-retaining-wall.jpg';
import r_stampedConcreteDrivewayAndRetainingWall from '../assets/recovered/stamped-concrete-driveway-and-retaining-wall.jpg';
import r_cpfPaverDriveway from '../assets/recovered/cpf-paver-driveway.jpg';
import r_customCommercialSignAtOaksMall from '../assets/recovered/custom-commercial-sign-at-oaks-mall.jpg';
import r_concreteCommercialSignAtMonteVistaChurch from '../assets/recovered/concrete-commercial-sign-at-monte-vista-church.jpg';
import r_newburyParkMonteVistaConcreteSign from '../assets/recovered/newbury-park-monte-vista-concrete-sign.jpg';
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
/*
  Viewpoint School, 2026-09-19. Six more frames of the Robertson Family Field
  build, pulled from the recovered media library at their full 1900px and named
  for the work. The page had three photographs and no header because the only
  copies on hand were 678px off the old site's rendered pages; that has not been
  true since the originals came back.
*/
import r_viewpointDiamondCalabasas from '../assets/recovered/viewpoint-school-baseball-diamond-calabasas.jpg';
import r_robertsonFamilyFieldScoreboard from '../assets/recovered/robertson-family-field-scoreboard-viewpoint-school.jpg';
import r_viewpointBackstopSurround from '../assets/recovered/viewpoint-school-backstop-and-concrete-surround.jpg';
import r_viewpointInfieldWarningTrack from '../assets/recovered/viewpoint-school-infield-warning-track.jpg';
import r_viewpointOutfieldBlockWall from '../assets/recovered/viewpoint-school-outfield-block-wall.jpg';
import r_viewpointOutfieldFoulLine from '../assets/recovered/viewpoint-school-outfield-turf-and-foul-line.jpg';
import r_gardenWallStoneVeneerAndPorchClose from '../assets/recovered/garden-wall-stone-veneer-and-porch-close.jpg';
import r_paversAndStoneVeneer from '../assets/recovered/pavers-and-stone-veneer.jpg';
import r_customStoneWallLinedDriveway from '../assets/recovered/custom-stone-wall-lined-driveway.jpg';
import r_cpfCustomDrivewayAndStoneWalls from '../assets/recovered/cpf-custom-driveway-and-stone-walls.jpg';
import r_stoneWalkwayWaterFeatureVeneerAndMore from '../assets/recovered/stone-walkway-water-feature-veneer-and-more.jpg';
import r_customStoneworkVeneerAndGardenWall from '../assets/recovered/custom-stonework-veneer-and-garden-wall.jpg';
import r_stoneDrivewayWall from '../assets/recovered/stone-driveway-wall.jpg';
import r_porchWithPaversAndStoneVeneer from '../assets/recovered/porch-with-pavers-and-stone-veneer.jpg';
import r_stoneRetainingWallAndStampedConcreteDriveway from '../assets/recovered/stone-retaining-wall-and-stamped-concrete-driveway.jpg';
import r_sidewalkFeaturesWithStampedConcreteAndStone from '../assets/recovered/sidewalk-features-with-stamped-concrete-and-stone.jpg';
import r_sidewalkFeaturesWithStampedConcreteAndStone2 from '../assets/recovered/sidewalk-features-with-stamped-concrete-and-stone-2.jpg';
import r_retainingWallWithCreativeStoneFeatures from '../assets/recovered/retaining-wall-with-creative-stone-features.jpg';
import r_closeUpWallWithCreativeStoneFeatures from '../assets/recovered/close-up-wall-with-creative-stone-features.jpg';
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
import cFiberOpticConcreteCountertopDaylightEdge from '../assets/current/fiber-optic-concrete-countertop-daylight-edge.jpg';
import cFiberOpticConcreteCountertopDaylightSurface from '../assets/current/fiber-optic-concrete-countertop-daylight-surface.jpg';
import cFiberOpticConcreteCountertopLitAtNight from '../assets/current/fiber-optic-concrete-countertop-lit-at-night.jpg';
import cFlagstoneCappedSeatWallDetail from '../assets/current/flagstone-capped-seat-wall-detail.jpg';
import cFlagstonePatioBackyardDiningArea from '../assets/current/flagstone-patio-backyard-dining-area.jpg';
import cFlagstonePatioNaturalStonePaving from '../assets/current/flagstone-patio-natural-stone-paving.jpg';
import cFlagstonePatioStepsAndSeatWall from '../assets/current/flagstone-patio-steps-and-seat-wall.jpg';
import cHillsideBlockRetainingWallConstruction from '../assets/current/hillside-block-retaining-wall-construction.jpg';
import cLedLitCurvedConcreteWalkway from '../assets/current/led-lit-curved-concrete-walkway.jpg';
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

  /**
   * Hero-only upscale of `stoneEntry`. 1920x1279, machine-generated from the
   * 1024x682 original. Owner-supplied and owner-approved 2026-09-24.
   *
   * WHY THE maxDisplay IS 2048 AND MUST NOT BE RAISED
   *
   * The image policy derives its display cap from `img.width`, on the sound
   * assumption that pixels mean detail. That assumption is false for this one
   * file. Its 1920 pixels carry 1024 pixels' worth of real optical detail; the
   * rest is interpolation. Left alone the policy would happily lay it out at
   * 3840px on the strength of invented data, which is precisely the failure
   * the 2x rule exists to prevent.
   *
   * So the ceiling is pinned to 2x the REAL detail (1024 * 2 = 2048), not 2x
   * the file. That keeps the guard honest about what is actually in here.
   *
   * WHAT THE UPSCALE ACTUALLY DID, measured at 1:1 against a plain Lanczos
   * enlargement of the same crop: stone edges are crisper, and the faces are
   * smoother. It traded surface grain for edge definition. It did not
   * hallucinate stonework -- every stone and mortar joint is in the original --
   * which is why it survives contact with HANDOFF.md §4 where a more
   * aggressive upscale would not.
   *
   * Use it for the hero. Do not use it for a close crop of the stonework, and
   * do not quietly repoint `stoneEntry` at it: the other five call sites want
   * the untouched original.
   */
  stoneEntryHero: a(gbp01up,
    'Stone veneer entry columns flanking a walkway with mature foundation planting',
    2048),
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
  /*
   * These two are one job, and their old keys had the sequence backwards:
   * `beforeYardDirt` (yelp-01) and `beforeYardPoured` (yelp-02) read as
   * dirt-then-poured, so the pair was built in that order. It is wrong. The
   * concrete strip is present in BOTH frames -- the work is the WALL. yelp-02
   * still has the failing timber fence, yelp-01 has the new block wall on the
   * same line. Owner-confirmed 2026-09-26.
   *
   * Renamed to name the wall, because the old names caused the error and would
   * cause it again. The `before` prefix elsewhere in this file means "came out
   * of the yelp-before/ folder", not "is the earlier frame" -- see
   * `beforeLongWall`, which is an after.
   */
  yardFenceFailing: a(b02,
    'Leaning timber boundary fence behind a lawn, with a poured concrete slab already in place'),
  yardWallFinished: a(b01,
    'Tan block wall built on the old fence line, the same concrete slab in the foreground and the hills beyond'),
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
  concreteCounter: a(sCounter,
    'Poured concrete outdoor kitchen counter with a stainless steel built-in'),
  stoneVilla: a(sVilla,
    'Covered patio with stone columns and a red awning over outdoor furniture'),
  polishedCounter: a(sSlab,
    'Polished concrete countertop finished to a wet look'),


  // ---- custom-concrete-driveways ----
  stampedConcreteWalkwayProgressShot: a(r_stampedConcreteWalkwayProgressShot,
    'Freshly stamped concrete walkway in a tan ashlar pattern, the curved border banding scored in before the slab cured'),
  stampedConcreteProgressShot: a(r_stampedConcreteProgressShot,
    'Large-format stamped concrete flatwork with saw-cut joints, the release color still damp from the pour'),
  paverDrivewayWithCustomConcretePillars: a(r_paverDrivewayWithCustomConcretePillars,
    'Paver driveway running under a tile-roofed entry carried on custom concrete pillars'),
  concreteDrivewayWithStoneRetainingWalls: a(r_concreteDrivewayWithStoneRetainingWalls,
    'Concrete driveway curving down to the street between low stone retaining walls and a ranch fence'),
  stampedConcreteDrivewayWithStoneRetainingWall: a(r_stampedConcreteDrivewayWithStoneRetainingWall,
    'Driveway climbing to an iron gate between stacked stone retaining walls on a Spanish-style property'),
  stampedConcreteDrivewayAndRetainingWall: a(r_stampedConcreteDrivewayAndRetainingWall,
    'Broad stamped concrete driveway laid out in saw-cut panels, edged by a stone retaining wall with a cut cap'),
  cpfPaverDriveway: a(r_cpfPaverDriveway,
    'Paver driveway in tumbled gray and tan units, laid the full width of the lot and running back to the lawn'),
  customCommercialSignAtOaksMall: a(r_customCommercialSignAtOaksMall,
    'Cast concrete and stucco monument sign for The Oaks shopping center in Thousand Oaks'),
  concreteCommercialSignAtMonteVistaChurch: a(r_concreteCommercialSignAtMonteVistaChurch,
    'Monument sign for Monte Vista Presbyterian Church, cast and finished in stucco with a cross finial'),
  newburyParkMonteVistaConcreteSign: a(r_newburyParkMonteVistaConcreteSign,
    'The Monte Vista Presbyterian Church monument sign in Newbury Park, seen head-on from the street'),
  concreteAndStoneworkPoolProgressShot: a(r_concreteAndStoneworkPoolProgressShot,
    'Crew finishing a pool shell with artificial rock coping built up around the waterline'),

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
  viewpointDiamondCalabasas: a(r_viewpointDiamondCalabasas,
    'The finished Robertson Family Field diamond at Viewpoint School, Calabasas, red clay-colored infield and green turf under the hills'),
  robertsonFamilyFieldScoreboard: a(r_robertsonFamilyFieldScoreboard,
    'Scoreboard reading Robertson Family Field, standing over the outfield turf at Viewpoint School'),
  viewpointBackstopSurround: a(r_viewpointBackstopSurround,
    'Backstop netting and rail on their poured concrete surround, looking out over the Viewpoint School diamond'),
  viewpointInfieldWarningTrack: a(r_viewpointInfieldWarningTrack,
    'Infield turf meeting the red warning track at Viewpoint School, with the pitching rubber set in'),
  viewpointOutfieldBlockWall: a(r_viewpointOutfieldBlockWall,
    'Block outfield wall running the boundary of the Viewpoint School field, capped and rendered'),
  viewpointOutfieldFoulLine: a(r_viewpointOutfieldFoulLine,
    'Outfield turf and painted foul line running out toward the trees at Viewpoint School'),
  cpfStoneMailbox: a(r_cpfStoneMailbox,
    'Stone veneer mailbox pillar with a slate cap and house numbers, built to match the home behind it'),
  gardenWallStoneVeneerAndPorchClose: a(r_gardenWallStoneVeneerAndPorchClose,
    'Stacked stone garden wall running alongside the concrete path up to a white-railed porch'),
  paversAndStoneVeneer: a(r_paversAndStoneVeneer,
    'Curving paver walkway crossing the front lawn to a ranch house skirted in stone veneer'),
  customStoneWallLinedDriveway: a(r_customStoneWallLinedDriveway,
    'Long concrete driveway climbing a hillside lot between stacked stone retaining walls'),
  cpfCustomDrivewayAndStoneWalls: a(r_cpfCustomDrivewayAndStoneWalls,
    'Driveway rising from the street to a gated entry between stone-faced walls, Agoura Hills'),
  stoneWalkwayWaterFeatureVeneerAndMore: a(r_stoneWalkwayWaterFeatureVeneerAndMore,
    'Stone veneer frontage with a stepped entry, iron handrail and a boulder water feature set into the planting'),
  customStoneworkVeneerAndGardenWall: a(r_customStoneworkVeneerAndGardenWall,
    'Stacked stone garden wall running the length of a front lawn, capped flat along the top'),
  stoneDrivewayWall: a(r_stoneDrivewayWall,
    'Low stone garden wall with a flat cut cap, edging the lawn in front of a ranch house'),
  porchWithPaversAndStoneVeneer: a(r_porchWithPaversAndStoneVeneer,
    'Porch floored in pavers with stone veneer carried up the column bases, Thousand Oaks'),
  stoneRetainingWallAndStampedConcreteDriveway: a(r_stoneRetainingWallAndStampedConcreteDriveway,
    'Wide driveway with a stone-faced retaining wall running along the sidewalk, Newbury Park'),
  sidewalkFeaturesWithStampedConcreteAndStone: a(r_sidewalkFeaturesWithStampedConcreteAndStone,
    'Flagstone panels set into the sidewalk and concrete steps rising to the entry, between stone walls and drought planting'),
  sidewalkFeaturesWithStampedConcreteAndStone2: a(r_sidewalkFeaturesWithStampedConcreteAndStone2,
    'Flagstone inset sidewalk with a boulder-set stone retaining wall running across the frontage'),
  retainingWallWithCreativeStoneFeatures: a(r_retainingWallWithCreativeStoneFeatures,
    'Stacked stone retaining wall with boulders set into the face, Dos Vientos, Newbury Park'),
  closeUpWallWithCreativeStoneFeatures: a(r_closeUpWallWithCreativeStoneFeatures,
    'Close on the boulders set into the face of the stacked stone retaining wall, Dos Vientos'),

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
  ledLitCurvedConcreteWalkway: a(cLedLitCurvedConcreteWalkway,
    'Curved concrete walkway with lighting run under the edge, washing the path and the planted beds at dusk'),
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
  fiberOpticConcreteCountertopDaylightEdge: a(cFiberOpticConcreteCountertopDaylightEdge,
    'Fiber-optic concrete countertop in daylight, lit points scattered across the polished gray slab above a chiseled rock-face edge and an oak cabinet'),
  fiberOpticConcreteCountertopDaylightSurface: a(cFiberOpticConcreteCountertopDaylightSurface,
    'Close on the polished concrete surface in daylight, exposed aggregate and lit fiber ends sitting flush in the finish'),
  fiberOpticConcreteCountertopLitAtNight: a(cFiberOpticConcreteCountertopLitAtNight,
    'Fiber-optic concrete countertop lit at night, hundreds of fiber ends cast into the slab reading as a field of blue and white stars'),
  colorChangingFiberOpticConcreteCountertop: a(cColorChangingFiberOpticConcreteCountertop,
    'Fiber-optic concrete countertop running three colors at once, green, blue and white zones set into the polished slab'),

} as const;

export type AssetKey = keyof typeof A;

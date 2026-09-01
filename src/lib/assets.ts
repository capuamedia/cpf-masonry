import type { ImageMetadata } from 'astro';
import type { Tier } from './images';

// -- tier 01: the only files above 1000px showing real work -------------------
import gbp01 from '../assets/large/gbp-01-stone-entry.jpg';
import gbp04 from '../assets/large/gbp-04-pergola-patio.jpg';
import gbp05 from '../assets/large/gbp-05-brick-wall-railing.jpg';
import gbp06tex from '../assets/large/gbp-06-paving-texture.jpg';

// -- tier 02: Yelp finished work, 1000px long side ----------------------------
import y03 from '../assets/yelp-finished/yelp-03.jpg';
import y04 from '../assets/yelp-finished/yelp-04.jpg';
import y05 from '../assets/yelp-finished/yelp-05.jpg';
import y08 from '../assets/yelp-finished/yelp-08.jpg';
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

// -- tier 03: before / in-progress --------------------------------------------
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

// -- tier 04: the company's own old site, 678px -------------------------------
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

import logoJpg from '../assets/logo/cpf-logo-1080.jpg';

export interface Asset {
  img: ImageMetadata;
  tier: Tier;
  /**
   * Describes the actual work, not the category. Written from the contact
   * sheets in _docs/. This is local SEO copy, not an accessibility checkbox.
   */
  alt: string;
}

const a = (img: ImageMetadata, tier: Tier, alt: string): Asset => ({ img, tier, alt });

export const LOGO_RASTER = logoJpg;

export const A = {
  // ---- large ---------------------------------------------------------------
  brickWallRailing: a(gbp05, 'large',
    'Red brick dugout wall topped with a white perforated steel screen, concrete steps and sidewalk alongside a baseball diamond'),
  pavingTexture: a(gbp06tex, 'large',
    'Close-up of red clay brick paving laid in a tight running bond'),
  stoneEntry: a(gbp01, 'large',
    'Stone veneer entry columns flanking a walkway with mature foundation planting'),
  pergolaPatio: a(gbp04, 'large',
    'Timber pergola over a natural stone patio in a residential backyard'),

  // ---- yelp finished -------------------------------------------------------
  poolWaterFeature: a(y27, 'yelp',
    'Swimming pool with a raised stone water feature, palms and a blue market umbrella'),
  pergolaLounge: a(y28, 'yelp',
    'Natural stone patio under a timber pergola with blue umbrellas and lounge seating'),
  patioSteps: a(y29, 'yelp',
    'Natural stone patio and steps with blue umbrellas beside a raised planter'),
  waterGarden: a(y30, 'yelp',
    'Landscaped water feature edged in stone with aquatic planting'),
  roseWalkway: a(y23, 'yelp',
    'Paver walkway running between beds of flowering roses to a side gate'),
  gazeboLawn: a(y08, 'yelp',
    'Gazebo on a lawn with a circular gravel bed and a brick paver path'),
  herringboneClose: a(y13, 'yelp',
    'Red brick paving laid in a herringbone pattern, photographed close'),
  herringboneWet: a(y16, 'yelp',
    'Herringbone brick paving with a damp finish showing the clay color variation'),
  roseFrontage: a(y15, 'yelp',
    'Front of a Conejo Valley home with rose beds, a black metal fence and a paved drive'),
  curvedRoseWalk: a(y17, 'yelp',
    'Curving paver walkway alongside rose beds leading to a side entry'),
  fencedWalkway: a(y18, 'yelp',
    'Paver walkway with a black metal fence and a clipped hedge'),
  entryCourtyard: a(y04, 'yelp',
    'Entry courtyard with a white gate, potted plants and paver flooring'),
  brickWallHouse: a(y05, 'yelp',
    'Red brick garden wall running alongside a tile-roofed house'),
  brickWallTrees: a(y03, 'yelp',
    'Tall red brick garden wall with mature trees behind'),
  driveApron: a(y19, 'yelp',
    'Paved driveway apron and walkway at a residential garage'),
  paverDrive: a(y20, 'yelp',
    'Paver driveway with planted borders in front of a home'),
  potteryEntry: a(y25, 'yelp',
    'Home entry with potted plants set over paver flooring'),
  curvedDrive: a(y26, 'yelp',
    'Curved paver driveway sweeping in front of a residence'),
  stakedTrees: a(y14, 'yelp',
    'Newly planted trees staked beside a finished block wall'),

  // ---- before / during -----------------------------------------------------
  beforeYardDirt: a(b01, 'yelp',
    'Bare graded dirt yard with a freshly poured concrete strip and the hills beyond'),
  beforeYardPoured: a(b02, 'yelp',
    'The same yard with concrete flatwork complete and the ground made up'),
  beforeWallShed: a(b06, 'yelp',
    'Block wall and shed standing on bare graded ground'),
  beforeLongWall: a(b07, 'yelp',
    'Long block wall running the length of a bare dirt yard'),
  beforeFenceDirt: a(b09, 'yelp',
    'Existing wood fence and bare soil before construction began'),
  duringBlockWall: a(b10, 'yelp',
    'Block wall part-built alongside established planting'),
  beforePalmsDirt: a(b11, 'yelp',
    'Bare dirt yard with an old wood fence and palms before work started'),
  duringBrickWall: a(b12, 'yelp',
    'Brick wall part-built with rubble still at its base'),
  duringWallCorner: a(b21, 'yelp',
    'Corner of a block wall under construction'),
  duringWallPlanting: a(b22, 'yelp',
    'Block wall with planting going in alongside'),
  duringPondArea: a(b24, 'yelp',
    'Planting established around a newly formed pond area'),

  // ---- site photos, 678px --------------------------------------------------
  dosVientosDrive: a(s01, 'site',
    'Stone-faced retaining wall curving alongside a stamped concrete driveway at a Dos Vientos property in Newbury Park'),
  ymcaBackstop: a(s02, 'site',
    'Red brick backstop wall with chain-link fencing behind home plate at the Triunfo YMCA baseball fields'),
  viewpointDiamond: a(s03, 'site',
    'Completed baseball diamond with red and green synthetic turf at Robertson Family Field, Viewpoint School in Calabasas'),
  oaksMonument: a(s04, 'site',
    'Stone and stucco monument sign reading "The Oaks" set into a landscaped bed'),
  dosVientosWall: a(s05, 'site',
    'Stacked stone property-line retaining wall beside a broad concrete driveway at a Dos Vientos home'),
  viewpointOutfield: a(s06, 'site',
    'Green synthetic outfield turf and boundary netting at Robertson Family Field, Viewpoint School'),
  stampedDriveway: a(s07, 'site',
    'Tan stamped concrete driveway with a scored border running up to a residential garage'),
  viewpointHomePlate: a(s08, 'site',
    'Home plate and infield with red warning-track turf at Robertson Family Field, Viewpoint School'),
  stoneFireplaceTall: a(s09, 'site',
    'Tall stacked-stone outdoor fireplace with an arched firebox and raised hearth on a backyard patio'),
  poolFireplace: a(s10, 'site',
    'Cream cast stone fireplace and chimney standing beside a swimming pool'),
  spanishDrive: a(s11, 'site',
    'Concrete driveway and flagstone walkway in front of a Spanish-style Conejo Valley home'),
  fountainPavers: a(s12, 'site',
    'Circular tiered fountain set into a paver surround with planted beds'),
  ymcaShed: a(s13, 'site',
    'Equipment shed and chain-link enclosure alongside the outfield at the Triunfo YMCA fields'),
  firePitSeating: a(s14, 'site',
    'Round stone fire pit with a curved seating wall on a poolside patio'),
  outfieldWall: a(s15, 'site',
    'Curved tan segmental block retaining wall running along an outfield boundary'),
  brickFireplaceMantel: a(s16, 'site',
    'Stone and brick outdoor fireplace with a timber mantel under a covered patio'),
  dugoutFront: a(s17, 'tiny',
    'Front of the completed dugout with bench seating behind a perforated steel screen'),
  dugoutFooter: a(s18, 'tiny',
    'Poured concrete footing and brick base course of the dugout during construction'),
  dugoutBack: a(s19, 'tiny',
    'Rear elevation of the finished brick dugout with concrete steps and railing'),
  concreteCounter: a(sCounter, 'site',
    'Poured concrete outdoor kitchen counter with a stainless steel built-in'),
  stoneVilla: a(sVilla, 'slider',
    'Covered patio with stone columns and a red awning over outdoor furniture'),
  polishedCounter: a(sSlab, 'slider',
    'Polished concrete countertop finished to a wet look'),
} as const;

export type AssetKey = keyof typeof A;

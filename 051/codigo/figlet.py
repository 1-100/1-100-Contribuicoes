from PIL import Image, ImageDraw, ImageFont
from pyfiglet import Figlet

img_size = 500

font_size = 20

fl_fonts = ['1943____', '3-d', '4x4_offr', '5lineoblique','64f1____', 'acrobatic', 'alligator', 'alphabet', 'arrows', 'avatar', 'a_zooloo', 'banner', 'banner3-D', 'banner3', 'banner4', 'barbwire', 'basic', 'beer_pub', 'bell', 'big', 'bigchief', 'bubble', 'bubble__', 'bulbhead', 'catwalk', 'chunky', 'clb6x10', 'coinstak', 'colossal', 'computer', 'com_sen_', 'contessa', 'contrast', 'cosmic', 'couri', 'cricket', 'dcs_bfmo', 'diamond', 'digital', 'doom', 'dotmatrix', 'drpepper', 'd_dragon', 'ebbs_2__', 'eca_____', 'eftichess', 'eftiwater', 'epic', 'f15_____', 'fbr1____', 'fbr_stri', 'fender', 'finalass', 'fireing_', 'fourtops', 'fp1_____', 'fp2_____', 'fraktur', 'funky_dr', 'future_1', 'fuzzy', 'ghost_bo', 'goofy', 'gothic', 'gothic__', 'graceful', 'gradient', 'graffiti', 'greek', 'hollywood', 'home_pak', 'hyper___', 'inc_raw_', 'invita', 'italic', 'italics_', 'jazmine', 'jerusalem', 'katakana', 'kban', 'kik_star', 'larry3d', 'lazy_jon', 'lcd', 'lean', 'letters', 'letter_w', 'linux', 'lockergnome', 'madrid', 'mad_nurs', 'magic_ma', 'marquee', 'master_o', 'maxfour', 'mayhem_d', 'modern__', 'moscow', 'nancyj-fancy', 'nancyj-underlined', 'nancyj', 'new_asci', 'nfi1____', 'nipples', 'notie_ca', 'npn_____', 'ntgreek', 'nvscript', 'o8', 'octal', 'odel_lak', 'ogre', 'ok_beer_', 'os2', 'outrun__', 'pacos_pe', 'panther_', 'pawn_ins', 'pawp', 'peaks', 'pebbles', 'pepper', 'phonix__', 'platoon2', 'platoon_', 'pod_____', 'poison', 'puffy', 'pyramid', 'p_skateb', 'p_s_h_m_', 'r2-d2___', 'radical_', 'rad_phan', 'rad_____', 'rainbow_', 'rally_s2', 'rally_sp', 'rampage_', 'rastan__', 'raw_recu', 'rci_____', 'rectangles', 'relief', 'relief2', 'rev', 'ripper!_', 'road_rai', 'rockbox_', 'rok_____', 'roman', 'roman___', 'rot13', 'rounded', 'rowancap', 'rozzo', 'runic', 'runyc', 'sans', 'sansb', 'sansbi', 'sansi', 'sblood', 'sbook', 'sbookb', 'sbookbi', 'sbooki', 'script', 'script__', 'serifcap', 'shadow', 'shimrod', 'short', 'skateord', 'skateroc', 'skate_ro', 'sketch_s', 'slant', 'slide', 'slscript', 'small', 'smisome1', 'smkeyboard', 'smscript', 'smshadow', 'smslant', 'smtengwar', 'sm______', 'space_op', 'spc_demo', 'speed', 'stacey', 'stampatello', 'standard', 'starwars', 'star_war', 'stealth_', 'stellar', 'stencil1', 'stencil2', 'stop', 'straight', 'street_s', 'subteran', 'super_te', 'tanja', 'tav1____', 'taxi____', 'tec1____', 'tecrvs__', 'tec_7000', 'tengwar', 'term', 'thick', 'thin', 'threepoint', 'ticks', 'ticksslant', 'tiles', 'times', 'timesofl', 'tinker-toy', 'ti_pan__', 'tomahawk', 'tombstone', 'top_duck', 'trashman', 'trek', 'triad_st', 'ts1_____', 'tsalagi', 'tsm_____', 'tsn_base', 'tty', 'ttyb', 'tubular', 'twin_cob', 'twopoint', 'type_set', 't__of_ap', 'ucf_fan_', 'ugalympi', 'unarmed_', 'univers', 'usaflag', 'usa_pq__', 'usa_____', 'utopia', 'utopiab', 'utopiabi', 'utopiai', 'vortron_', 'war_of_w', 'wavy', 'weird', 'whimsy', 'xbrite', 'xbriteb', 'xbritebi', 'xbritei', 'xchartr', 'xchartri', 'xcour', 'xcourb', 'xcourbi', 'xcouri', 'xhelv', 'xhelvb', 'xhelvbi', 'xhelvi', 'xsans', 'xsansb', 'xsansbi', 'xsansi', 'xsbook', 'xsbookb', 'xsbookbi', 'xsbooki', 'xtimes', 'xtty', 'xttyb', 'yie-ar__', 'yie_ar_k', 'z-pilot_', 'zig_zag_', 'zone7___']
pil_font = ImageFont.truetype(font='JetBrainsMono-Medium.ttf', size=font_size)

for i in range(0, 100):
    
  fl_font_name = fl_fonts[i]
  fl = Figlet(font=fl_font_name, direction="auto", justify="center", width=40)
  banner = fl.renderText(str(i+1))

  image = Image.new(mode = "RGB", size = (img_size, img_size), color = "black")
  draw = ImageDraw.Draw(image)
  banner_x = font_size
  banner_y = font_size * 3
  draw.text((banner_x, banner_y), banner, font=pil_font, fill=(255,255,255))
  fl_font_name_width, fl_font_name_height = draw.textsize(fl_font_name)
  fl_font_name_x = img_size / 2 - fl_font_name_width
  fl_font_name_y = img_size - font_size * 4
  draw.text((fl_font_name_x, fl_font_name_y), fl_font_name, font=pil_font, fill=(255,255,255))
  
  filename = str(i+1) + ".jpg"
  image.save("saida/" + filename)


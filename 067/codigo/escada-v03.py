import bpy

escada_total = 100

lance_total = 10
lance_degrau = 0

direcao_sentidos = ["X+", "Y+", "X-", "Y-"]
nova_direcao = 0
direcao_atual = direcao_sentidos[nova_direcao]

degrau_tamanho = 1
degrau = {
  "localizacao": (0, 0, 0),
  "sentido" : direcao_atual, 
  "altura": degrau_tamanho / 2
  }


# Cria a escada

for i in range(escada_total):
  
  # Desenha o degrau atual
  bpy.ops.mesh.primitive_cube_add(size=degrau_tamanho, location=degrau["localizacao"], scale=(1, 1, 1))
  degrau_objeto = bpy.context.object
  degrau_objeto.name = "Degrau-" + str(i + 1)

  # Movi todos os vertices para alinhar os degraus
  # com a origem do mundo
  for vert in degrau_objeto.data.vertices:
    vert.co[0] += 0.5
    vert.co[1] += 0.5
    vert.co[2] += 0.5

  degrau_objeto.scale = (1, 1, degrau["altura"])
  degrau_objeto.hide_render = True
  degrau_objeto.keyframe_insert(data_path="hide_render", frame=1)
  
  # Criar o proximo degrau

  lance_degrau += 1
  
  if lance_degrau > lance_total - 1:
    nova_direcao += 1
    direcao_atual = direcao_sentidos[nova_direcao % 4]  
    lance_degrau = 0
    if direcao_atual == "Y+" or  direcao_atual == "Y-":
        lance_total = lance_total - 1
    
  if direcao_atual == "X+":
    x = degrau["localizacao"][0] + degrau_tamanho
    y = degrau["localizacao"][1]
    z = degrau["localizacao"][2]
    novo_localizacao = (x, y, z)

  if direcao_atual == "Y+":
    x = degrau["localizacao"][0]
    y = degrau["localizacao"][1] + degrau_tamanho
    z = degrau["localizacao"][2]
    novo_localizacao = (x, y, z)

  if direcao_atual == "X-":
    x = degrau["localizacao"][0] - degrau_tamanho
    y = degrau["localizacao"][1]
    z = degrau["localizacao"][2]
    novo_localizacao = (x, y, z)

  if direcao_atual == "Y-":
    x = degrau["localizacao"][0]
    y = degrau["localizacao"][1] - degrau_tamanho
    z = degrau["localizacao"][2]
    novo_localizacao = (x, y, z)
    
  novo_altura = degrau["altura"] + degrau_tamanho / 2     

  novo_degrau = {
    "localizacao": novo_localizacao,
    "sentido" : direcao_atual, 
    "altura": novo_altura
    }

  degrau = novo_degrau
  
# Cria a animacao

# https://blender.stackexchange.com/questions/169672/object-hide-render-crashes-blender-before-starting-to-bake
escada_colecao = bpy.data.collections["Escada"]
objetos_nomes = [obj.name for obj in escada_colecao.all_objects]

print(len(objetos_nomes))

for i in range(101):
  frame_atual = i + 1
  bpy.context.scene.frame_current = frame_atual
  for indice, objetos_nome in enumerate(objetos_nomes):
    objeto = bpy.data.objects.get(objetos_nome)
    objeto.hide_render = False
    objeto.keyframe_insert(data_path="hide_render", frame= frame_atual)
    if indice == i:
      print(i, indice)
      break
    
    

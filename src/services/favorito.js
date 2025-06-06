import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITOS_KEY = '@hinos_favoritos';

export async function getFavoritos() {
  const json = await AsyncStorage.getItem(FAVORITOS_KEY);
  return json ? JSON.parse(json) : [];
}

export async function salvarFavorito(hino) {
  const favoritos = await getFavoritos();
  const existe = favoritos.some(item => item.id === hino.id);
  if (!existe) {
    favoritos.push(hino);
    await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritos));
  }
}

export async function removerFavorito(hinoId) {
  let favoritos = await getFavoritos();
  favoritos = favoritos.filter(item => item.id !== hinoId);
  await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritos));
}

export async function isFavorito(hinoId) {
  const favoritos = await getFavoritos();
  return favoritos.some(item => item.id === hinoId);
}

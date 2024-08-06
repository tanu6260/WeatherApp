import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { useTranslation } from "react-i18next";
import { COLORS } from '../../constants';
// import { connect,  } from 'react-redux';





const Languages = ({ navigation,  }) => {

  const { t, i18n } = useTranslation();
  const selectedLanguageCode = i18n.language;
  const [changeLang, setChangeLang] = useState(selectedLanguageCode)
  // const dispatch = useDispatch()
  // const setLanguage = (code) => {
  //   return i18n.changeLanguage(code);
  // };
  console.log("select language", selectedLanguageCode)

  const LANGUAGES = [
    { code: "en", label: `${t("language:english")}`, lablet: "A" },
    { code: "hi", label: `${t("language:hindi")}`, lablet: "अ" },
    // { code: "ban", label: "Bangla",lablet:"ক"  },
    { code: "mr", label: `${t("language:marathi")}`, lablet: "म" },
    { code: "gu", label: `${t("language:gujarati")}`, lablet: "ખ" },
    { code: "pa", label: `${t("language:punjabi")}`, lablet: "ਪ" },

    { code: "bn", label: `${t("language:bengali")}`, lablet: "ক" },
    { code: "te", label: `${t("language:telugu")}`, lablet: "ఎ" },
    { code: "ur", label: `${t("language:urdu")}`, lablet: "ಎ" },
    { code: "kn", label: `${t("language:kannada")}`, lablet: "ಎ" },
    { code: "or", label: `${t("language:odia")}`, lablet: "କ" },
    { code: "ml", label: `${t("language:malayalam")}`, lablet: "କ" },
    { code: "as", label: `${t("language:assamese")}`, lablet: "উঃ" },

  ];
  
  const handleLanguageChange = () => {
    console.log("changeLang: ", changeLang)
    i18n.changeLanguage(changeLang);
    navigation.goBack()
  }

  return (
    <View style={styles.container}>

  
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.btnContainer}>
        {LANGUAGES.map((language, index) => {
          const selectedLanguage = language.code === changeLang;
          return (
            <TouchableOpacity style={selectedLanguage ? [styles.languageBtn, { backgroundColor: COLORS.primary }] : styles.languageBtn} key={index}
              onPress={() => setChangeLang(language.code)}
            >
              <Text style={selectedLanguage ? [styles.labels, { color: COLORS.white }] : styles.labels}>{language.label}</Text>
            </TouchableOpacity>
          )
        })}
      
      </View>
     

    </ScrollView>
    <TouchableOpacity style={styles.setLan_btn}
          onPress={() => handleLanguageChange(navigation)}
        >
          <Text style={styles.setLang_text}>{t("language:setLanguage")}</Text>
        </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Languages)
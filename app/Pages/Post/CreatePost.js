import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'; 
import { firestore, storage } from '@react-native-firebase/firestore'; // Assuming you are using Firebase Firestore for database
import { COLORS } from '../../constants/theme';

const CreatePostScreen = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.user);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);

  const createPost = async () => {
    try {
      setLoading(true);

      const postData = {
        title,
        description,
        type,
        tags: tags.split(',').map(tag => tag.trim()),
        author: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        createdAt: firestore.FieldValue.serverTimestamp(),
      };

      await firestore().collection('posts').add(postData);

      setLoading(false);
      navigation.goBack();
    } catch (error) {
      console.error('Error creating post:', error);
      setLoading(false);
      Alert.alert('Error', 'Failed to create post. Please try again later.');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Post Title"
        value={title}
        onChangeText={setTitle}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Post Description"
        value={description}
        onChangeText={setDescription}
        multiline
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Post Type"
        value={type}
        onChangeText={setType}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Tags (Optional, comma-separated)"
        value={tags}
        onChangeText={setTags}
        style={{ marginBottom: 10 }}
      />
      <Button title="Create Post" onPress={createPost} />
      {loading && <ActivityIndicator style={{ marginTop: 20 }} size="large" color={COLORS.primary} />}
    </View>
  );
};

export default CreatePostScreen;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from './../../store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';
import { signOut } from './../../store/modules/auth/actions';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Form initialData={ profile } onSubmit={ handleSubmit }>
                <AvatarInput name="avatar_id" />

                <Input type="text" name="name" placeholder="Nome completo" />
                <Input type="email" name="email" placeholder="Seu endereço de e-mail" />

                <hr/>

                <Input type="password" name="oldPassword" placeholder="Sua senha atual" />
                <Input type="password" name="password" placeholder="Nova senha" />
                <Input type="password" name="confirmPassword" placeholder="Confirmação de senha" />

                <button type="submit">Atualizar peril</button>
            </Form>

            <button onClick={ handleSignOut }>Sair do GoBarber</button>
        </Container>
    );
}

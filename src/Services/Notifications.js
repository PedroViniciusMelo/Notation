import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
    });

//Método customizável para a notificação
export default async function schedulePushNotification(titulo, date) {
    let idMsg 
    const trigger = date
    trigger.setSeconds(0);
    await Notifications.scheduleNotificationAsync({
        content: {
        title: "Olá, você tem uma nova atividade! ⌛",
        body: `Não esqueça, ${titulo}`,
        data: { data: 'goes here' },
        },
        trigger
    }).then(idNote => idMsg = idNote )
    return idMsg
}